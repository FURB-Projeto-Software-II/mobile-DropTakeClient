import React, { Component } from 'react'
import { StyleSheet } from 'react-native';
import { Layout, List, Divider, ListItem  } from '@ui-kitten/components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Actions } from 'react-native-router-flux';

import { search, select } from './actions'

class StorageList extends Component {

    componentDidMount() {
        this.props.search()
    }

    renderItem = ({ item, index }) => {

        const { select } = this.props
        
        return(
            <ListItem
                onPress={() => Actions.storageProfile()}
                title={`${item.name} ${index + 1}`}
                description=''
                onPress={select}
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
    list: state.orderStoreList.list
})

const mapDispatchToProps = dispatch => bindActionCreators({ search, select }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(StorageList)

const styles = StyleSheet.create({
    container: {
      maxHeight: '100%',
    },
});