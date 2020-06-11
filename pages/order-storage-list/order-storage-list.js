import React, { Component } from 'react'
import { StyleSheet } from 'react-native';
import { Layout, Divider, List, ListItem } from '@ui-kitten/components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Actions } from 'react-native-router-flux';

import { View, FlatList, Text } from 'react-native';

import { search, select } from './actions'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

class StorageList extends Component {

    componentDidMount() {
        this.props.search()
    }

    renderItem = ({ item, index }) => {

        const { select } = this.props

        return(
            <ListItem
            title={`${item.name}`}
            onPress={() => {
                select(item._id, item.name)
            }}
            description=''
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