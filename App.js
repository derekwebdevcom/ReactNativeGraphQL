import React from 'react';
import LinearGradient from 'react-native-linear-gradient'
import {
  SafeAreaView,
  FlatList,
  Text,
  View,
  Image
} from 'react-native';
import styles from './styles';
import TOKEN from './credentials'; 

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
  useQuery
} from '@apollo/client';

const GET_ME = gql`
  query {
    viewer {
      login
      name
      avatarUrl
    }
  }
`;

const GET_REPOS = gql`
  query($number_of_repos: Int!) {
    viewer {
      name
      repositories(first: $number_of_repos) {
        nodes {
          name
        }
      }
    }
  }
`
function Header(){
  return (
    <View style={styles.header}>
       <LinearGradient
          colors={['#DCDCDC', '#C0C0C0', '#7c7c7f' ]}
          style={styles.linearGradient}>
      <Text style={styles.textHeading}>Github Explorer</Text>
      <Image source={require('./github.png')} style={{width: 100, height: 100}}/>
      </LinearGradient>
    </View>
  )
}

const App = () => {
  
  const {data, loading, error} = useQuery(GET_ME);
  console.log(data);
  const {login, name, avatarUrl} = data?.viewer || {};
  
  const {data: nodes} = useQuery(GET_REPOS, {
    variables: {
    number_of_repos: 30,
   },
  });
  
  const repos = nodes?.viewer.repositories.nodes.map((node) => node.name);
  console.log(repos)
  if (error) {
    return <View style={styles.errorView}><Text style={styles.errorText}>Error retrieving data</Text></View>
  }
  if (loading){
    return <View style={styles.errorView}><Text style={styles.errorText}>Retrieving your data...{"\n"}         Please Wait.</Text></View>
  }
    return (
      <SafeAreaView style={styles.listContainer}>
        <View style={styles.userContainer}>
        <LinearGradient   
          colors={['#7c7c7f', '#181819', '#000000' ]}
          style={styles.linearGradientUser}>
        <Text style={styles.textUser}>Avatar: </Text><Image source={{uri: avatarUrl}} style={{width: 100, height: 100}}></Image>
        <Text style={styles.textUser}>User: {login}</Text>
        <Text style={styles.textUser}>Display Name: {name}</Text>
        </LinearGradient>
        </View>
        <FlatList
        data={repos} 
        keyExtractor={(item, index) => 'key' + index}
        renderItem={({item: repo}) => {
        return (  
        <SafeAreaView style={styles.list}>
          <Text style={styles.listText}>{repo}</Text>
        </SafeAreaView>
        );
      }}></FlatList>
      <SafeAreaView style={styles.noteContainer}>
      <LinearGradient
          colors={['#DCDCDC', '#C0C0C0', '#7c7c7f' ]}
          style={styles.linearGradientNote}>
        <Text style={styles.noteText}>Repositories for: {name}</Text>
        </LinearGradient>
        </SafeAreaView>
      </SafeAreaView>
    );
  }
  const client = new ApolloClient({
    uri: 'https://api.github.com/graphql',
    headers: {
      authorization: `Bearer ${TOKEN}`
    },
    cache: new InMemoryCache(),
    typePolicies: {
      Query: {
        fields: {
          avatarUrl: {
            merge: true,
            login: {
              merge: true,
            name: {
              merge: true,
          },
        },
      },
    }
  }
}
  });
 
  export default function AppConn(){
    return (
    <ApolloProvider client={client}>
      <Header/>
      <App />
    </ApolloProvider>)
  }
  
  
  
