import React, { Component, useState, useEffect } from 'react'
import { StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import MapView from 'react-native-maps';
import { Layout, Text, Divider, Button, Card, View } from '@ui-kitten/components';
import { bindActionCreators } from 'redux';
import { Actions } from 'react-native-router-flux'
import { FontAwesome } from 'expo-vector-icons'
import { requestPermissionsAsync, getCurrentPositionAsync } from 'expo-location'

import { getLoggedUserInfo, searchOrders, pageInit } from './actions'

class Home extends Component {

    componentDidMount() {
        this.props.pageInit()
        this.props.getLoggedUserInfo()
        this.props.searchOrders()
    }

    render() {

        const { userName, orders, loaded } = this.props

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
                            loaded ? (orders.map(order => {
                                return (
                                    <Card style={styles.orderCard} onPress={() => Actions.orderInfo()}>
                                        <Text category="label" style={styles.orderCardTitle}>TV Samgung</Text>
                                        <Text>{`Entrega para ${order.storage.name} - ${order.storage.adresses[0] ? order.storage.adresses[0].street : ''}, ${order.storage.adresses[0] ? order.storage.adresses[0].number : ''} - ${order.storage.adresses[0] ? order.storage.adresses[0].neighborhood : ''}, ${order.storage.adresses[0] ? order.storage.adresses[0].city : ''} - ${order.storage.adresses[0] ? order.storage.adresses[0].state : ''}`}</Text>
                                        <Text style={[styles.orderCardStatus, order.order.status == 0 ? styles.status0 : order.order.status == 1 ? styles.status1 : styles.status3]}>
                                            {`${order.order.status == 0 ? `Pedido em entrega` : order.order.status == 1 ? `edido pronto para retirada` : `Pedido retirado` }`}
                                        </Text>
                                    </Card>
                                )
                            })) : <></>
                        }
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
    orders: state.home.orders,
    loaded: state.home.loaded
})

const mapDispatchToProps = dispatch => bindActionCreators({ getLoggedUserInfo, searchOrders, pageInit }, dispatch)

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
    },
    status0: {
        color: '#d6b41c'
    },
    status1: {
        color: '#0091bd',
    },
    status2: {
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