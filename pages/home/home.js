import React, { Component } from 'react'
import { StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Layout, Text, Divider, Button } from '@ui-kitten/components';
import { bindActionCreators } from 'redux';
import { Actions } from 'react-native-router-flux'

class Home extends Component {

    render() {
        return (
            <>
                <Layout style={styles.containerUp}>
                    <Button style={styles.button} onPress={() => Actions.orderCrud()}>
                        NOVO PEDIDO
                    </Button>
                </Layout>
                <Layout style={styles.containerDown}>
                    <Layout style={styles.welcomebox}>
                        <Text style={styles.welcometext}>Bem-vindo, Bruno!</Text>
                    </Layout>
                    <Divider style={styles.divider}/>
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
})