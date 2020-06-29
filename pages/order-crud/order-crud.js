import React, { Component } from 'react'
import { StyleSheet, Dimensions } from 'react-native';
import { Layout, Input, Divider, Select, Button, SelectItem, Text, CheckBox } from '@ui-kitten/components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Actions } from 'react-native-router-flux'

import { descricaoChange,  
    larguraChange, 
    alturaChange, 
    pesoChange, 
    categoriaChange, 
    entregarEmCasaChange, 
    enderecoChange, 
    openStorageSelection, 
    executeConfirm,
    searchAddress,
    searchCategory
} from './actions'

import { Item, Picker, Icon } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';

class OrderCrud extends Component {

    
    componentDidMount() {
        this.props.searchAddress();
        this.props.searchCategory();
    }

    render() {

        const { descricaoChange, 
            larguraChange, 
            alturaChange, 
            pesoChange, 
            entregarEmCasaChange, 
            enderecoChange,
            categoriaChange,
            executeConfirm, 
            addressList,
            endereco,
            categoryList,
            categoria
        } = this.props
        
        return(
            <ScrollView style={styles.containerMaster}>
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
                <Item picker >
                        <Picker
                            label="Categoria"
                            mode="dropdown"
                            iosIcon={<Icon name="arrow-down" />}
                            style={{ width: '100%' }}
                            placeholder="Categoria"
                            selectedValue={categoria}
                            onValueChange={e => categoriaChange(e)}
                        >
                            {
                                categoryList.map(category => {
                                    return(
                                        <Picker.Item 
                                            label={`${category.name}`} 
                                            value={category._id} 
                                            key={category._id}
                                        />
                                    )
                                })
                            }
                        </Picker>
                    </Item>
                </Layout>

                <CheckBox
                    style={styles.layout}
                    checked={this.props.entregarEmCasa}
                    onChange={e => entregarEmCasaChange(e)}>
                    <Text>Entregar em casa</Text>
                </CheckBox>

                <Layout style={styles.layout}>
                    {/* <Select selectedIndex={this.props.endereco} disabled={!this.props.entregarEmCasa} onSelect={enderecoChange} label="Endereço">
                        <SelectItem title='Selecione uma opção' value="0"/>
                        {
                            addressList.map(address => {
                                return(
                                    <SelectItem value={address._id} title={`${address.street}, ${address.number} - ${address.city}`}/>
                                )
                            })
                        }
                    </Select> */}
                    <Item picker >
                        <Picker enabled={this.props.entregarEmCasa}
                            label="Endereço"
                            mode="dropdown"
                            iosIcon={<Icon name="arrow-down" />}
                            style={{ width: '100%' }}
                            placeholder="Endereço"
                            selectedValue={endereco}
                            onValueChange={e => enderecoChange(e)}
                        >
                            {
                                addressList.map(address => {
                                    return(
                                        <Picker.Item 
                                            label={`${address.street}, ${address.number} - ${address.city}`} 
                                            value={address._id} 
                                            key={address._id}
                                        />
                                    )
                                })
                            }
                        </Picker>
                    </Item>
                </Layout>

                <Button onPress={() => Actions.storageFind()} style={styles.button}>
                    Selecionar Storage
                </Button>
                
                <Layout style={styles.layout}>
                    <Divider></Divider>

                    <Text style={styles.marginTop} category="label">Storage Selecionado</Text>
                    <Text style={styles.marginTop}>{this.props.storageName || 'Nenhum storage selecionado ainda.'}</Text>
                </Layout>

            </Layout>
            <Layout style={styles.containerConfirm}>
                <Button onPress={executeConfirm} style={[styles.button, styles.cofirmButton]} size='giant'>
                    CONFIRMAR
                </Button>
            </Layout>
            </ScrollView>
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
    storageName: state.orderStoreList.storageName,
    addressList: state.orderCrud.addressList,
    endereco: state.orderCrud.endereco,
    categoryList: state.orderCrud.categoryList,
    categoria: state.orderCrud.categoria
})

const mapDispatchToProps = dispatch => bindActionCreators({ descricaoChange,  
    larguraChange, 
    alturaChange, 
    pesoChange, 
    categoriaChange, 
    entregarEmCasaChange, 
    enderecoChange, 
    openStorageSelection, 
    executeConfirm,
    searchAddress,
    searchCategory
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(OrderCrud)

const styles = StyleSheet.create({
    containerMaster: {
        maxHeight: Math.round(Dimensions.get('window').height) + 15
    },
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