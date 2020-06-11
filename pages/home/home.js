import React, { Component, useState, useEffect } from 'react'
import { StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import MapView from 'react-native-maps';
import { Layout, Text, Divider, Button, Card, View } from '@ui-kitten/components';
import { bindActionCreators } from 'redux';
import { Actions } from 'react-native-router-flux'
import { FontAwesome } from 'expo-vector-icons'
import { requestPermissionsAsync, getCurrentPositionAsync } from 'expo-location'

import { getLoggedUserInfo, searchOrders } from './actions'

class Home extends Component {

    componentDidMount() {
        this.props.getLoggedUserInfo()
    }

    render() {

        const { userName } = this.props

        return (
            <>
                <Layout style={styles.containerUp}>
                    <MapView style={styles.mapStyle} >
                        <Button style={styles.button} onPress={() => Actions.orderCrud()}>
                            <Text style={styles.buttonText}>NOVO PEDIDO</Text>
                        </Button>

                        <Button style={styles.configButton} onPress={() => Actions.configs()}>
                            <FontAwesome name="gear" size={21} color="black" />
                        </Button>
                    </MapView>
                </Layout>
                <Layout style={styles.containerDown}>
                    <Layout style={styles.welcomebox}>
                        <Text style={styles.welcometext}>{`Seus últimos pedidos, ${userName}.`}</Text>
                    </Layout>
                    <Divider style={styles.divider}/>
                    <Layout style={styles.orderList}>
                        {
                            () => {
                                if (orders.len() >= 2) {
                                    return (
                                        <>
                                        <Card style={styles.orderCard} onPress={() => Actions.orderInfo()}>
                                            <Text category="label" style={styles.orderCardTitle}>TV Samgung</Text>
                                            <Text>Entrega para José Affonso - Rua Arthur Schreiber, 71 - Velha, Blumenau - SC</Text>
                                            <Text style={styles.orderCardStatus}>Pronto para retirada</Text>
                                        </Card>
                                        <Card style={styles.orderCard} onPress={() => Actions.orderInfo()}>
                                            <Text category="label" style={styles.orderCardTitle}>TV Samgung</Text>
                                            <Text>Entrega para José Affonso - Rua Arthur Schreiber, 71 - Velha, Blumenau - SC</Text>
                                            <Text style={styles.orderCardStatus}>Pronto para retirada</Text>
                                        </Card> 
                                        </>
                                    )
                                } else if (orders.len == 1) {
                                    return (
                                        <Card style={styles.orderCard} onPress={() => Actions.orderInfo()}>
                                            <Text category="label" style={styles.orderCardTitle}>TV Samgung</Text>
                                            <Text>Entrega para José Affonso - Rua Arthur Schreiber, 71 - Velha, Blumenau - SC</Text>
                                            <Text style={styles.orderCardStatus}>Pronto para retirada</Text>
                                        </Card> 
                                    )
                                }
                            }
                        }
                        <Card style={styles.orderCard} onPress={() => Actions.orderInfo()}>
                            <Text category="label" style={styles.orderCardTitle}>TV Samgung</Text>
                            <Text>Entrega para José Affonso - Rua Arthur Schreiber, 71 - Velha, Blumenau - SC</Text>
                            <Text style={styles.orderCardStatus}>Pronto para retirada</Text>
                        </Card>
                        <Card style={styles.orderCard} onPress={() => Actions.orderInfo()}>
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
    userName: state.home.userName,
    orders: state.home.orders
})

const mapDispatchToProps = dispatch => bindActionCreators({ getLoggedUserInfo, searchOrders }, dispatch)

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
    configButton: {
        flexDirection: 'row-reverse',
        backgroundColor: 'white',
        borderColor: 'transparent',
        height: 60,
        width: 60,
        top: '45%',
        left: '90%',
        borderRadius: 50
    }
})