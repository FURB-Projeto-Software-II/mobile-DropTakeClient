import React, { Component } from 'react'
import { StyleSheet } from 'react-native';
import { Layout, List, Divider, ListItem  } from '@ui-kitten/components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { search, openOrderInfo } from './actions'

class OrdersList extends Component {

    componentDidMount() {
        this.props.search()
    }

    renderItem = ({ item, index }) => {

        const { openOrderInfo } = this.props

        return(
            <ListItem
            title={`${item.description}`}
            description={`${item.status == 0 ? `Pedido em entrega` : item.status == 1 ? `Pedido pronto para retirada` : `Pedido retirado` }`}
            onPress={() => openOrderInfo(item._id)}
            />
        )
    };

    render() {

        const { list } = this.props

        return(
            <Layout>
                <List
                    style={styles.container}
                    data={list}
                    ItemSeparatorComponent={Divider}
                    renderItem={this.renderItem}
                />
            </Layout>
        )
    }
}

const mapStateToProps = state => ({
    list: state.ordersList.list
})

const mapDispatchToProps = dispatch => bindActionCreators({ search, openOrderInfo }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(OrdersList)

const styles = StyleSheet.create({
    container: {
      maxHeight: '100%',
    },
});