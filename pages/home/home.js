import React, { Component } from 'react'
import { StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import MapView from 'react-native-maps';
import { Layout, Text, Divider, Button, Card, View } from '@ui-kitten/components';
import { bindActionCreators } from 'redux';
import { Actions } from 'react-native-router-flux'

class Home extends Component {

    render() {
        return (
            <>
                <Layout style={styles.containerUp}>
                    <MapView style={styles.mapStyle} >
                    <Button style={styles.button} onPress={() => Actions.orderCrud()}>
                        <Text style={styles.buttonText}>NOVO PEDIDO</Text>
                    </Button>
                    </MapView>
                </Layout>
                <Layout style={styles.containerDown}>
                    <Layout style={styles.welcomebox}>
                        <Text style={styles.welcometext}>Seus últimos pedidos, Bruno.</Text>
                    </Layout>
                    <Divider style={styles.divider}/>
                    <Layout style={styles.orderList}>
                        <Card style={styles.orderCard}>
                            <Text category="label" style={styles.orderCardTitle}>TV Samgung</Text>
                            <Text>Entrega para José Affonso - Rua Arthur Schreiber, 71 - Velha, Blumenau - SC</Text>
                            <Text style={styles.orderCardStatus}>Pronto para retirada</Text>
                        </Card>
                        <Card style={styles.orderCard}>
                            <Text category="label" style={styles.orderCardTitle}>TV Samgung</Text>
                            <Text>Entrega para José Affonso - Rua Arthur Schreiber, 71 - Velha, Blumenau - SC</Text>
                            <Text style={styles.orderCardStatus}>Pronto para retirada</Text>
                        </Card>
                    </Layout>
                    <Layout style={styles.buttonBottom}>
                        <Button style={styles.buttonOrderList} onPress={() => Actions.ordersList()}>
                            <Text style={styles.buttonOrderListText}>VER TODOS PEDIDOS</Text>
                        </Button>
                    </Layout>
                </Layout>
            </>
        )
    }

}

const mapStateToProps = state => ({
    
})

const mapDispatchToProps = dispatch => bindActionCreators({ }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Home)

const styles = StyleSheet.create({
    containerUp: {
        backgroundColor: 'black',
        height: '50%'
    },
    containerDown: {
        height: '50%',
        flexDirection: 'column',
    },
    welcometext: {
        alignItems: 'center',
        padding: 15,
        fontSize: 20,
        
    },
    welcomebox: {
        alignItems: 'center',
    },
    button: {
        marginTop: 50,
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 15,
        backgroundColor: '#501380',
        borderColor: 'transparent'
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold'
    },
    buttonOrderList: {
        backgroundColor: 'transparent',
        borderColor: 'transparent'
    },
    buttonOrderListText: {
        color: '#501380'
    },
    buttonBottom: {
        
    },
    orderList: {
        height: '73%',
    },
    orderCard: {
        margin: 15
    },
    orderCardTitle: {
        marginBottom: 5
    },
    orderCardStatus: {
        marginTop: 3,
        fontWeight: 'bold',
        color: 'green'
    },
    mapStyle: {
        width: '100%',
        height: '100%',
      },
})