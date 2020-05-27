import React, { Component } from 'react'
import { StyleSheet } from 'react-native';
import { Layout, Input, Divider, Select, Button, SelectItem, Text, CheckBox } from '@ui-kitten/components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Actions } from 'react-native-router-flux'

import { zipcodeChange, estadoChange,  cidadeChange, neighborhoodChange, streetChange, numberChange, complementChange, executeCadastrar } from './actions'

class AddressCrud extends Component {

    render() {

        const { zipcodeChange, estadoChange, cidadeChange, neighborhoodChange, streetChange, numberChange, complementChange, executeCadastrar } = this.props

        return (
            <Layout>
                <Layout style={[styles.layout, styles.marginTop]}>
                    <Input
                        label="CEP"
                        placeholder='CEP'
                        value={this.props.zipcode}
                        onChangeText={e => zipcodeChange(e)}
                    />
                </Layout>

                <Layout style={styles.layout}>
                    <Select selectedIndex={this.props.estado} onSelect={e => estadoChange(e)} label="Estado">
                        <SelectItem title='Acre'/>
                        <SelectItem title='Alagoas'/>
                        <SelectItem title='Amapá'/>
                        <SelectItem title='Amazonas'/>
                        <SelectItem title='Bahia'/>
                        <SelectItem title='Ceará'/>
                        <SelectItem title='Distrito Federal'/>
                        <SelectItem title='Espírito Santo'/>
                        <SelectItem title='Goiás'/>
                        <SelectItem title='Maranhão'/>
                        <SelectItem title='Mato Grosso'/>
                        <SelectItem title='Mato Grosso do Sul'/>
                        <SelectItem title='Minas Gerais'/>
                        <SelectItem title='Paraná'/>
                        <SelectItem title='Paraíba'/>
                        <SelectItem title='Pará'/>
                        <SelectItem title='Pernambuco'/>
                        <SelectItem title='Piauí'/>
                        <SelectItem title='Rio de Janeiro'/>
                        <SelectItem title='Rio Grande do Norte'/>
                        <SelectItem title='Rio Grande do Sul'/>
                        <SelectItem title='Rondônia'/>
                        <SelectItem title='Roraima'/>
                        <SelectItem title='Santa Catarina'/>
                        <SelectItem title='Sergipe'/>
                        <SelectItem title='São Paulo'/>
                        <SelectItem title='Tocantins'/>
                    </Select>
                </Layout>

                <Layout style={styles.layout}>
                    <Input
                        label="Cidade"
                        placeholder='Cidade'
                        value={this.props.cidade}
                        onChangeText={e => cidadeChange(e)}
                    />
                </Layout>

                <Layout style={styles.layout}>
                    <Input
                        label="Bairro"
                        placeholder='Bairro'
                        value={this.props.neighborhood}
                        onChangeText={e => neighborhoodChange(e)}
                    />
                </Layout>

                <Layout style={styles.layout}>
                    <Input
                        label="Rua"
                        placeholder='Rua'
                        value={this.props.street}
                        onChangeText={e => streetChange(e)}
                    />
                </Layout>

                <Layout style={styles.layout}>
                    <Input
                        label="Número"
                        placeholder='Número'
                        value={this.props.number}
                        onChangeText={e => numberChange(e)}
                    />
                </Layout>

                <Layout style={styles.layout}>
                    <Input
                        label="Complemento"
                        placeholder='Complemento'
                        value={this.props.complement}
                        onChangeText={e => complementChange(e)}
                    />
                </Layout>

                <Button onPress={executeCadastrar} style={styles.button} >
                    CADASTRAR
                </Button>
            </Layout>
        )
    }

}


const mapStateToProps = state => ({
    zipcode: state.addressCrud.zipcode,
    estado: state.addressCrud.estado,
    cidade: state.addressCrud.cidade,
    neighborhood: state.addressCrud.neighborhood,
    street: state.addressCrud.street,
    number: state.addressCrud.number,
    complement: state.addressCrud.complement
})

const mapDispatchToProps = dispatch => bindActionCreators({ zipcodeChange, estadoChange,  cidadeChange, neighborhoodChange, streetChange, numberChange, complementChange, executeCadastrar }, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(AddressCrud)

const styles = StyleSheet.create({
    button: {
        marginTop: 15,
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 15,
        backgroundColor: '#501380',
        borderColor: 'transparent'
    },
    layout: {
        alignItems: 'stretch',
        backgroundColor: 'transparent',
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 15,
    },
    largura: {
        width:'40%',
        marginLeft: 15,
    },
    marginTop: {
        marginTop: 15
    },
})