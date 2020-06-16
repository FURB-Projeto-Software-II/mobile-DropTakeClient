import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux' 
import { StyleSheet } from 'react-native'
import { Layout, Button,ListItem, List, Divider } from '@ui-kitten/components'
import { Actions } from 'react-native-router-flux'

import { search, edit } from './actions'


class AddressList extends Component {

    componentDidMount() {
        this.props.search()
    }

    constructor(props){
        super(props)
    }

    renderItem = ({ item, index }) => {

        const { edit } = this.props

        return (
            <ListItem
            title={`${item.street}, ${item.number}`}
            description={`CEP: ${item.zipcode} - Bairro: ${item.neighborhood}`}
            onPress={() => edit(item._id)}
            />
        )
    };

    render() {

        const { list } = this.props

        return (
           <Layout>
               <Layout style={styles.listAddressBox}>
                    <List
                        style={styles.container}
                        data={list}
                        ItemSeparatorComponent={Divider}
                        renderItem={this.renderItem}
                    />
               </Layout>
               <Layout style={styles.newAddressBox}>
                    <Button style={styles.button} onPress={() => Actions.addressCrud()}>
                        NOVO ENDEREÇO
                    </Button>
               </Layout>
           </Layout> 
        )
    }

}

const mapStateToProps = state => ({
    list: state.addressList.list
})

const mapDispatchToProps = dispatch => bindActionCreators({ search, edit }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(AddressList)

const styles = StyleSheet.create({
    listAddressBox: {
        height: '90%'
    },
    newAddressBox: {
        height: '10%'
    },
    button: {
        marginTop: 15,
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 15,
        backgroundColor: '#501380',
        borderColor: 'transparent'
    },
    container: {
        maxHeight: '100%',
    },
})