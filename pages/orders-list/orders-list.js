import React, { Component } from 'react'
import { StyleSheet } from 'react-native';
import { Layout, List, Divider, ListItem  } from '@ui-kitten/components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { search } from './actions'

class OrdersList extends Component {

    componentDidMount() {
        this.props.search()
    }

    renderItem = ({ item, index }) => (
        <ListItem
          title={`${item.description}`}
          description=''
          onPress={item}
        />
    );

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

const mapDispatchToProps = dispatch => bindActionCreators({ search }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(OrdersList)

const styles = StyleSheet.create({
    container: {
      maxHeight: '100%',
    },
});