import React, { Component } from 'react'
import { StyleSheet } from 'react-native';
import { Layout, Input, Button } from '@ui-kitten/components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { requestPermissionsAsync, getCurrentPositionAsync } from 'expo-location'

import { 
    nomeChange, 
    dataNascimentoChange, 
    emailChange, 
    confirmaEmailChange, 
    senhaChange, 
    confirmarSenhaChange, 
    validateSignup,
    setLatitude,
    setLongitude
 } from './actions'

class Signin extends Component {

    async componentDidMount() {

        const { granted } = await requestPermissionsAsync();

        if (granted) {
            
            const { coords } = await getCurrentPositionAsync({
                enableHighAccuracy: true,
            });

            const { latitude, longitude } = coords;

            this.props.setLongitude(latitude)
            this.props.setLatitude(longitude)

        }
    }

    render() {

        const { nomeChange, dataNascimentoChange, emailChange, confirmaEmailChange, senhaChange, confirmarSenhaChange, validateSignup } = this.props

        return (
            <Layout style={styles.container}>
                <Layout level='4' style={styles.layout}>
                    <Input
                        label="Nome"
                        placeholder='Nome'
                        value={this.props.nome}
                        onChange={e => nomeChange(e)}
                    />
                </Layout>
                {/* <Layout level='4' style={styles.layout}>
                    <Input
                        label="Data de Nascimento"
                        placeholder='Data de Nascimento'
                        value={this.props.dataNascimento}
                        onChange={e => dataNascimentoChange(e)}
                    />
                </Layout> */}
                <Layout level='4' style={styles.layout}>
                    <Input
                        label="Email"
                        placeholder='Email'
                        value={this.props.email}
                        onChange={e => emailChange(e)}
                    />
                </Layout>
                <Layout level='4' style={styles.layout}>
                    <Input
                        label="Confirme o Email"
                        placeholder='Confirme o Email'
                        value={this.props.confirmaEmail}
                        onChange={e =>confirmaEmailChange(e)}
                    />
                </Layout>
                <Layout level='4' style={styles.layout}>
                    <Input
                        label="Senha"
                        placeholder='Senha'
                        value={this.props.senha}
                        type="password"
                        secureTextEntry={true}
                        onChange={e =>senhaChange(e)}
                    />
                </Layout>
                <Layout level='4' style={styles.layout}>
                    <Input
                        label="Confirme a Senha"
                        placeholder='Confirmar a Senha'
                        value={this.props.confirmarSenha}
                        type="password"
                        secureTextEntry={true}
                        onChange={e => confirmarSenhaChange(e)}
                    />
                </Layout>
                <Button onPress={validateSignup} style={styles.button}>
                    CADASTRAR
                </Button>
            </Layout>
        )

    }

}

const mapStateToProps = state => ({
    nome: state.signup.nome,
    dataNascimento: state.signup.dataNascimento,
    email: state.signup.email,
    confirmaEmail: state.signup.confirmaEmail,
    senha: state.signup.senha,
    confirmarSenha: state.signup.confirmarSenha
})

const mapDispatchToProps = dispatch => bindActionCreators({ 
    nomeChange, 
    dataNascimentoChange, 
    emailChange, 
    confirmaEmailChange, 
    senhaChange, 
    confirmarSenhaChange, 
    validateSignup,
    setLatitude,
    setLongitude
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Signin)

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'stretch',
        paddingTop: 15,
        height: '100%'
    },
    layout: {
        alignItems: 'center',
        marginLeft: 15,
        marginRight: 15,
        backgroundColor: 'transparent',
        marginBottom: 15
    },
    button: {
        marginTop: 15,
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 15,
        backgroundColor: '#501380'
    }
  });