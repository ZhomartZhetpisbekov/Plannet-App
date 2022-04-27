import React, {useState} from 'react'
import { KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, View, TouchableOpacity, ScrollView } from 'react-native';
import Task from '../components/Task';


const HomeScreen = () => {

  const [task, setTask] = useState();

  const [taskItems, setTaskItems] = useState(['Java OOP Basics', 'Workout 20 min', 'Read 30 pages']);

  const handleAddTask = () => {

    if (task != null) {
      setTaskItems([...taskItems, task]);
      setTask(null);
    }
    else {
      alert('Please enter something!');
    }

    // setTaskItems([...taskItems, task]);
    // setTask(null);
    // console.log(taskItems)
  }

  return (
    <View style={styles.container}>

      {/* Today's tasks */}
      <View style={styles.headerContainer}>
        <Text style={styles.sectionTitle}>Today's Challenges</Text>
      </View>

      <View style={styles.tasksWrapper}>
        <ScrollView style={styles.items}>
          {/* Tasks go there */}
          {
            taskItems.map((item, index) => {
              return <Task key={index} text={item}/>
            })
          }
        </ScrollView>
    </View>

      {/* Write a task */}
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.writeTaskWrapper}>
          <TextInput 
            style={styles.input}
            placeholder={'Write a task..'}
            value={task}
            onChangeText={text => setTask(text)}/>

          <TouchableOpacity 
            onPress={() => handleAddTask()}
            >
            <View style={styles.addWrapper}>
              <Text style={styles.addText}>+</Text>
            </View>
          </TouchableOpacity>
        
      </KeyboardAvoidingView>
    </View>
  )
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#defafa',
  },
  tasksWrapper: {
    // paddingTop: 50,
    paddingHorizontal: 20,
  },
  headerContainer: {
    backgroundColor: '#b6dbd8',
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 60,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  items: {
    height: '79%'
  },
  writeTaskWrapper: {
    flex: 1,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 100,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  input: {
    padding: 15,
    backgroundColor: 'white',
    marginLeft: 20,
    borderWidth: 1,
    borderRadius: 60,
    borderColor: '#c0c0c0',
    width: '70%',
  },
  addWrapper: {
    width: 60,
    height: 60,
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 60,
    marginRight: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#c0c0c0',
    borderWidth: 1,
  },
  addText: {
    fontSize: 20,
    
  },
});