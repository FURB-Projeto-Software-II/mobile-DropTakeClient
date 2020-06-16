import React, { Component } from 'react'
import { StyleSheet } from 'react-native';
import { Layout, Input, Divider, Select, Button, SelectItem, Text, CheckBox } from '@ui-kitten/components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Actions } from 'react-native-router-flux'

import { 
    zipcodeChange, 
    estadoChange,  
    cidadeChange, 
    neighborhoodChange, 
    streetChange, 
    numberChange, 
    complementChange, 
    executeCadastrar, 
    loadAddressToEdit 
} from './actions'

class AddressCrud extends Component {

    componentDidMount() {

        if (this.props.addressId) {
            this.props.loadAddressToEdit(this.props.addressId)
        }

    }

    render() {

        const { 
            zipcodeChange, 
            estadoChange, 
            cidadeChange, 
            neighborhoodChange, 
            streetChange, 
            numberChange, 
            complementChange, 
            executeCadastrar 
        } = this.props

        return (
            <Layout>
                <Layout style={[styles.layout, styles.marginTop]}>
                    <Input
                        label="CEP"
                        placeholder='CEP'
                        value={this.props.zipcode}
                        onChange={e => zipcodeChange(e)}
                    />
                </Layout>

                <Layout style={styles.layout}>
                    <Select selectedIndex={this.props.estado} onSelect={e => estadoChange(e)} label="Estado">
                        <SelectItem title='Acre' value="AC"/>
                        <SelectItem title='Alagoas' value="AL"/>
                        <SelectItem title='Amapá' value="AP"/>
                        <SelectItem title='Amazonas' value="AM"/>
                        <SelectItem title='Bahia' value="BA"/>
                        <SelectItem title='Ceará' value="CE"/>
                        <SelectItem title='Distrito Federal' value="DF"/>
                        <SelectItem title='Espírito Santo' value="ES"/>
                        <SelectItem title='Goiás' value="GO"/>
                        <SelectItem title='Maranhão' value="MA"/>
                        <SelectItem title='Mato Grosso' value="MT"/>
                        <SelectItem title='Mato Grosso do Sul' value="MS"/>
                        <SelectItem title='Minas Gerais' value="MG"/>
                        <SelectItem title='Paraná' value="PR"/>
                        <SelectItem title='Paraíba' value="PB"/>
                        <SelectItem title='Pará' value="PA"/>
                        <SelectItem title='Pernambuco' value="PE"/>
                        <SelectItem title='Piauí' value="PI"/>
                        <SelectItem title='Rio de Janeiro' value="RJ"/>
                        <SelectItem title='Rio Grande do Norte' value="RN"/>
                        <SelectItem title='Rio Grande do Sul' value="RS"/>
                        <SelectItem title='Rondônia' value="RO"/>
                        <SelectItem title='Roraima' value="RR"/>
                        <SelectItem title='Santa Catarina' value="SC"/>
                        <SelectItem title='Sergipe' value="SE"/>
                        <SelectItem title='São Paulo' value="SP"/>
                        <SelectItem title='Tocantins' value="TO"/>
                    </Select>
                </Layout>

                <Layout style={styles.layout}>
                    <Input
                        label="Cidade"
                        placeholder='Cidade'
                        value={this.props.cidade}
                        onChange={e => cidadeChange(e)}
                    />
                </Layout>

                <Layout style={styles.layout}>
                    <Input
                        label="Bairro"
                        placeholder='Bairro'
                        value={this.props.neighborhood}
                        onChange={e => neighborhoodChange(e)}
                    />
                </Layout>

                <Layout style={styles.layout}>
                    <Input
                        label="Rua"
                        placeholder='Rua'
                        value={this.props.street}
                        onChange={e => streetChange(e)}
                    />
                </Layout>

                <Layout style={styles.layout}>
                    <Input
                        label="Número"
                        placeholder='Número'
                        value={this.props.number}
                        onChange={e => numberChange(e)}
                    />
                </Layout>

                <Layout style={styles.layout}>
                    <Input
                        label="Complemento"
                        placeholder='Complemento'
                        value={this.props.complement}
                        onChange={e => complementChange(e)}
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
    complement: state.addressCrud.complement,
    id: state.addressCrud.id
})

const mapDispatchToProps = dispatch => bindActionCreators({ 
    zipcodeChange, 
    estadoChange, 
    cidadeChange, 
    neighborhoodChange, 
    streetChange, 
    numberChange, 
    complementChange, 
    executeCadastrar, 
    loadAddressToEdit 
}, dispatch)


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