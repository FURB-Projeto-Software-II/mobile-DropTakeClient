import React, { Component } from 'react'
import { StyleSheet } from 'react-native';
import { Layout, Input, Button } from '@ui-kitten/components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { nomeChange, dataNascimentoChange, emailChange, confirmaEmailChange, senhaChange, confirmarSenhaChange, executeSignin } from './actions'

class Signin extends Component {

    render() {

        const { executeSignin } = this.props

        return (
            <Layout style={styles.container}>
                <Layout level='4' style={styles.layout}>
                    <Input
                        label="Nome"
                        placeholder='Nome'
                        value={this.props.nome}
                        onChange={nomeChange}
                    />
                </Layout>
                <Layout level='4' style={styles.layout}>
                    <Input
                        label="Data de Nascimento"
                        placeholder='Data de Nascimento'
                        value={this.props.dataNascimento}
                        onChange={dataNascimentoChange}
                    />
                </Layout>
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
                        label="Confirme o Email"
                        placeholder='Confirme o Email'
                        value={this.props.confirmaEmail}
                        onChange={confirmaEmailChange}
                    />
                </Layout>
                <Layout level='4' style={styles.layout}>
                    <Input
                        label="Senha"
                        placeholder='Senha'
                        value={this.props.senha}
                        onChange={senhaChange}
                    />
                </Layout>
                <Layout level='4' style={styles.layout}>
                    <Input
                        label="Confirme a Senha"
                        placeholder='Confirmar a Senha'
                        value={this.props.confirmarSenha}
                        onChange={confirmarSenhaChange}
                    />
                </Layout>
                <Button onPress={executeSignin} style={styles.button}>
                    CADASTRAR
                </Button>
            </Layout>
        )

    }

}

const mapStateToProps = state => ({
    nome: state.signin.nome,
    dataNascimento: state.signin.dataNascimento,
    email: state.signin.email,
    confirmaEmail: state.signin.confirmaEmail,
    senha: state.signin.senha,
    confirmarSenha: state.signin.confirmarSenha
})

const mapDispatchToProps = dispatch => bindActionCreators({ nomeChange, dataNascimentoChange, emailChange, confirmaEmailChange, senhaChange, confirmarSenhaChange, executeSignin }, dispatch)

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