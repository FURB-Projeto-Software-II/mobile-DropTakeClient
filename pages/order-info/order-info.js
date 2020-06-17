import React, { Component } from "react"
import { StyleSheet } from 'react-native';
import { Layout, Text, Divider } from '@ui-kitten/components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Image } from 'react-native'
import QRCode from 'react-native-qrcode-svg'

import { getOrderInfo, pageInit } from './actions'

class OrderInfo extends Component {

    componentDidMount() {

        this.props.pageInit()
        this.props.getOrderInfo(this.props.orderId)

    }

    render() {

        const { order, storage, adress, category, loaded } = this.props

        return (
            <Layout style={styles.container}>
                <Text category="label" style={styles.title}>Informações do Produto</Text>
                <Text>{`Descrição: ${order.description}`}</Text>

                <Divider style={styles.divider}/>

                <Text category="label" style={styles.title}>Informações do Pagamento</Text>
                <Text>{`Valor: R$${order.price}`}</Text>
                <Text>Forma Pagamento: Cartão</Text>

                <Divider style={styles.divider}/>

                <Text category="label" style={styles.title}>Informações da Entrega</Text>
                <Text>{`Responsável Storage: ${storage.name}`}</Text>
                <Text>{storage.adresses.length > 0 ? `${`Endereço Storage: ${storage.adresses[0].street}, ${storage.adresses[0].number} - ${storage.adresses[0].neighborhood}, ${storage.adresses[0].city} - ${storage.adresses[0].state}`}` : ''}</Text>
                <Text>{`Entrega em sua casa: ${adress._id == "" ? 'NÃO' : 'SIM'}`}</Text>
                <Text>{adress._id == "" ? `${`Endereço de Entrega: ${adress.street}, ${adress.number} - ${adress.neighborhood}, ${adress.city} - ${adress.state}`}` : ''}</Text>
                
                <Divider style={styles.divider}/>

                <Layout style={styles.qrcodebox}>
                    <Text category="label" style={styles.title}>QRCODE para retirada do produto</Text>
                    {/* <Image  source={{
                        uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1200px-QR_code_for_mobile_English_Wikipedia.svg.png',
                    }}/> */}
                </Layout>
                
                {
                    loaded == true ? <QRCode style={styles.qrcode} value={order._id} size="2500"/> : <></>
                }
                

            </Layout>
        )

    }

}

const mapStateToProps = state => ({
    order: state.orderInfo.order,
    client: state.orderInfo.client,
    storage: state.orderInfo.storage,
    category: state.orderInfo.category,
    adress: state.orderInfo.adress,
    loaded: state.orderInfo.loaded
})

const mapDispatchToProps = dispatch => bindActionCreators({ getOrderInfo, pageInit }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(OrderInfo)

const styles = StyleSheet.create({
    container: {
        padding: 15,
        maxHeight: '100%',
    },
    divider: {
        margin: 15
    },
    title: {
        marginBottom: 5
    },
    qrcode: {
        width: 300,
        height: 300,
        alignItems: 'center',
    },
    qrcodebox: {
        alignItems: 'center',
    }
});