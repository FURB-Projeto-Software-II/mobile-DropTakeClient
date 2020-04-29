import React, { Component } from 'react'
import { StyleSheet } from 'react-native';
import { Layout, Text } from '@ui-kitten/components';
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
            <Layout style={styles.layout} level='4'>
                <Input
                    placeholder='Email'
                    value={this.props.email}
                    onChange={emailChange}
                />
            </Layout>
            <Layout style={styles.layout} level='4'>
                <Input
                    placeholder='Senha'
                    value={this.props.password}
                    type="password"
                    secureTextEntry='true'
                    onChange={passwordChange}
                />
            </Layout>
            <Button onPress={executeLogin}>
                LOGIN
            </Button>
        </Layout>
        )
    }
}

const mapStateToProps = state => ({
    email: state.login.variaveis, 
    password: state.login.showModal
})

const mapDispatchToProps = dispatch => bindActionCreators({ emailChange, passwordChange, executeLogin}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Login)

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
    },
    layout: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });