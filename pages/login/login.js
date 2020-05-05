import React, { Component } from 'react'
import { StyleSheet } from 'react-native';
import { Layout } from '@ui-kitten/components';
import { Actions } from 'react-native-router-flux'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Input, Button } from '@ui-kitten/components';

import { emailChange, passwordChange, executeLogin } from './actions'

class Login extends Component {

    constructor(props){
        super(props)
    }

    
    render() {
        
        const {emailChange, passwordChange, executeLogin} = this.props
        
        return (
        <Layout style={styles.container}>
            <Layout level='4' style={styles.layout}>
                <Input
                    label="Email"
                    placeholder='Email'
                    value={this.props.email}
                    onChange={emailChange}
                />
            </Layout>
            <Layout level='4' style={styles.layout}>
                <Input
                    label="Senha"
                    placeholder='Senha'
                    value={this.props.password}
                    type="password"
                    secureTextEntry="true"
                    onChange={passwordChange}
                />
            </Layout>
            <Button onPress={executeLogin} style={styles.button}>
                LOGIN
            </Button>
        </Layout>
        )
    }
}

const mapStateToProps = state => ({
    email: state.login.email, 
    password: state.login.password
})

const mapDispatchToProps = dispatch => bindActionCreators({ emailChange, passwordChange, executeLogin}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Login)

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#6B26A0',
        flexDirection: 'column',
        alignItems: 'stretch',
        paddingTop: 200,
        height: '100%'
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
    }
  });