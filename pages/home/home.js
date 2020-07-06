import React, { Component, useState, useEffect } from 'react'
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import MapView from 'react-native-maps';
import { Layout, Text, Divider, Button, Card,  } from '@ui-kitten/components';
import { bindActionCreators } from 'redux';
import { Actions } from 'react-native-router-flux'
import { FontAwesome } from 'expo-vector-icons'
import { requestPermissionsAsync, getCurrentPositionAsync } from 'expo-location'

import { getLoggedUserInfo, searchOrders, pageInit, openOrderInfo } from './actions'

class Home extends Component {

    componentDidMount() {
        this.props.pageInit()
        this.props.getLoggedUserInfo()
        this.props.searchOrders()
    }

    render() {

        const { userName, orders, loaded, openOrderInfo } = this.props

        return (
            <View >
                <Layout style={styles.containerUp}>
                    <MapView style={styles.mapStyle} />
                    <View style={styles.viewStyle}>
                        <Button style={styles.button} onPress={() => Actions.orderCrud()}>
                            <Text style={styles.buttonText}>NOVO PEDIDO</Text>
                        </Button>

                        <Button style={styles.buttonCfg} onPress={() => Actions.configs()}>
                            <FontAwesome name="gear" size={21} color="black" />
                        </Button>
                    </View>
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
                                    
                                    <Card key={order.order._id} style={styles.orderCard} onPress={() => openOrderInfo(order.order._id)}>
                                        <Text category="label" style={styles.orderCardTitle}>{order.order.description}</Text>
                                        <Text>{`Entrega para ${order.storage.name} - ${order.storage.adresses[0] ? order.storage.adresses[0].street : ''}, ${order.storage.adresses[0] ? order.storage.adresses[0].number : ''} - ${order.storage.adresses[0] ? order.storage.adresses[0].neighborhood : ''}, ${order.storage.adresses[0] ? order.storage.adresses[0].city : ''} - ${order.storage.adresses[0] ? order.storage.adresses[0].state : ''}`}</Text>
                                        <Text style={[styles.orderCardStatus, order.order.status == 0 ? styles.status0 : order.order.status == 1 ? styles.status1 : styles.status2]}>
                                            {`${order.order.status == 0 ? `Pedido em entrega` : order.order.status == 1 ? `Pedido pronto para retirada` : `Pedido retirado` }`}
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
            </View>
        )
    }
}

const mapStateToProps = state => ({
    userName: state.home.userName,
    orders: state.home.orders,
    loaded: state.home.loaded
})

const mapDispatchToProps = dispatch => bindActionCreators({ getLoggedUserInfo, searchOrders, pageInit, openOrderInfo }, dispatch)

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
        borderColor: 'transparent',
    },
    buttonCfg: {
        backgroundColor: 'white',
        width: '20%',
        marginTop: 50,
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 15,
        width: 60,
        borderColor: 'transparent',
        borderRadius: 50,
        marginTop: 'auto'
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
        position: 'absolute',
    },
    viewStyle: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        backgroundColor: 'transparent'
    },
    configButton: {
        
        backgroundColor: 'white',
        borderColor: 'transparent',
        height: 60,
        width: 60,
        top: '45%',
        left: '90%',
        
    }
})