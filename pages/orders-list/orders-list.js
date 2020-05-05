import React, { Component } from 'react'
import { StyleSheet } from 'react-native';
import { Layout, List, Divider, ListItem  } from '@ui-kitten/components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const data = new Array(8).fill({
    title: 'Item',
    description: 'Description for Item',
  });

class OrdersList extends Component {

    renderItem = ({ item, index }) => (
        <ListItem
          title={`${item.title} ${index + 1}`}
          description={`${item.description} ${index + 1}`}
        />
    );

    render() {
        return(
            <Layout>
                <List
                    style={styles.container}
                    data={data}
                    ItemSeparatorComponent={Divider}
                    renderItem={this.renderItem}
                />
            </Layout>
        )
    }
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => bindActionCreators({  }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(OrdersList)

const styles = StyleSheet.create({
    container: {
      maxHeight: '100%',
    },
});