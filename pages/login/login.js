import React, { Component } from 'react'
import { StyleSheet } from 'react-native';
import { Layout, Text } from '@ui-kitten/components';
import { Actions } from 'react-native-router-flux'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Input, Button } from '@ui-kitten/components';
import { FontAwesome5 } from 'expo-vector-icons'

import { emailChange, passwordChange, executeLogin } from './actions'

class Login extends Component {

    constructor(props) {
        super(props)
    }


    render() {

        const { emailChange, passwordChange, executeLogin } = this.props

        return (
            <Layout style={styles.container}>
                <Layout style={styles.logobox}>
                    <FontAwesome5 style={styles.layout} name="parachute-box" size={100} color="white" />
                    <Text style={styles.logotext}>Drop&Take</Text>
                </Layout>
                <Layout level='4' style={styles.layout}>
                    <Input
                        placeholder='Email'
                        value={this.props.email}
                        onChange={e => emailChange(e)}
                    />
                </Layout>
                <Layout level='4' style={styles.layout}>
                    <Input
                        placeholder='Senha'
                        value={this.props.password}
                        type="password"
                        secureTextEntry={true}
                        onChange={e => passwordChange(e)}
                    />
                </Layout>
                <Button onPress={executeLogin} style={styles.button}>
                    LOGIN
            </Button>

                <Button onPress={() => Actions.signin()} style={styles.inverseButton}>
                    <Text style={styles.inverseText}>SIGN IN</Text>
                </Button>
            </Layout>
        )
    }
}

const mapStateToProps = state => ({
    email: state.login.email,
    password: state.login.password
})

const mapDispatchToProps = dispatch => bindActionCreators({ emailChange, passwordChange, executeLogin }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Login)

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#6B26A0',
        flexDirection: 'column',
        alignItems: 'stretch',
        paddingTop: 150,
        height: '100%'
    },
    logobox: {
        backgroundColor: '#6B26A0',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 15
    },
    logotext: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 40,
    },
    layout: {
        alignItems: 'center',
        backgroundColor: 'transparent',
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 15
    },
    button: {
        marginTop: 15,
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 15,
        backgroundColor: 'transparent',
        borderColor: 'white'
    },
    inverseButton: {
        marginTop: 15,
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 15,
        backgroundColor: 'white',
    },
    inverseText: {
        color: '#6B26A0',
        fontWeight: 'bold'
    }
});