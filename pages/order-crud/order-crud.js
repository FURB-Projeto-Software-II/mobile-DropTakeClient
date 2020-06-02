import React, { Component } from 'react'
import { StyleSheet } from 'react-native';
import { Layout, Input, Divider, Select, Button, SelectItem, Text, CheckBox } from '@ui-kitten/components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Actions } from 'react-native-router-flux'

import { descricaoChange,  larguraChange, alturaChange, pesoChange, categoriaChange, entregarEmCasaChange, enderecoChange, openStorageSelection } from './actions'

class OrderCrud extends Component {

    
    render() {

        const { descricaoChange, larguraChange, alturaChange, pesoChange, entregarEmCasaChange } = this.props
        
        return(
            <>
            <Layout>
                <Layout style={[styles.layout, styles.marginTop]}>
                    <Input
                        label="Descrição"
                        placeholder='Descrição'
                        value={this.props.descricao}
                        onChangeText={text => descricaoChange(text)}
                    />
                </Layout>
                <Layout style={styles.tamanho}>
                    <Input style={styles.largura}
                        label="Tamanho"
                        placeholder='Largura'
                        value={this.props.largura}
                        onChangeText={text => larguraChange(text)}
                    />
                    <Text style={styles.labelCenter}>x</Text>
                    <Input style={styles.altura}
                        label=" "
                        placeholder='Altura'
                        value={this.props.altura}
                        onChangeText={text => alturaChange(text)}
                    />
                </Layout>
                <Layout style={styles.layout}>
                    <Input
                        label="Peso"
                        placeholder='Peso'
                        value={this.props.peso}
                        onChangeText={text => pesoChange(text)}
                    />
                </Layout>

                <Layout style={styles.layout}>
                    <Select selectedIndex={this.props.categoria} onSelect={categoriaChange} label="Categoria">
                        <SelectItem title='Option 1'/>
                        <SelectItem title='Option 2'/>
                        <SelectItem title='Option 3'/>
                    </Select>
                </Layout>

                <CheckBox
                    style={styles.layout}
                    checked={this.props.entregarEmCasa}
                    onChange={e => entregarEmCasaChange(e)}>
                    <Text>Entregar em casa</Text>
                </CheckBox>

                <Layout style={styles.layout}>
                    <Select selectedIndex={this.props.endereco} onSelect={enderecoChange} label="Endereço">
                        <SelectItem title='Option 1'/>
                        <SelectItem title='Option 2'/>
                        <SelectItem title='Option 3'/>
                    </Select>
                </Layout>

                <Button onPress={() => Actions.storageFind()} style={styles.button}>
                    Selecionar Storage
                </Button>
                
                <Layout style={styles.layout}>
                    <Divider></Divider>

                    <Text style={styles.marginTop} category="label">Storage Selecionado</Text>
                    <Text style={styles.marginTop}>{this.props.storageDescricao || 'Nenhum storage selecionado ainda.'}</Text>
                </Layout>

            </Layout>
            <Layout style={styles.containerConfirm}>
                <Button onPress={openStorageSelection} style={[styles.button, styles.cofirmButton]} size='giant'>
                    CONFIRMAR
                </Button>
            </Layout>
            </>
        )
    }

}

const mapStateToProps = state => ({
    descricao: state.orderCrud.descricao,
    largura: state.orderCrud.largura,
    altura: state.orderCrud.altura,
    peso: state.orderCrud.peso,
    categoria: state.orderCrud.categoria,
    entregarEmCasa: state.orderCrud.entregarEmCasa,
    storageDescricao: state.orderCrud.storageDescricao,
    storageId: state.orderStoreList.storageId,
})

const mapDispatchToProps = dispatch => bindActionCreators({ descricaoChange,  larguraChange, alturaChange, pesoChange, categoriaChange, entregarEmCasaChange, enderecoChange, openStorageSelection }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(OrderCrud)

const styles = StyleSheet.create({
    container: {
        maxHeight: '90%',
    },
    containerConfirm: {
        maxHeight: '10%',
    },
    tamanho: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    layout: {
        alignItems: 'stretch',
        backgroundColor: 'transparent',
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 15,
    },
    button: {
        marginTop: 15,
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 15,
        backgroundColor: '#501380',
        borderColor: 'transparent'
    },
    largura: {
        width:'40%',
        marginLeft: 15,
    },
    altura: {
        width:'40%',
        marginRight: 15,
    },
    labelCenter: {
        marginTop: 25,
        marginLeft: 15,
        marginRight: 15,
    },
    marginTop: {
        marginTop: 15
    },
    cofirmButton: {
        bottom: -15
    }
});