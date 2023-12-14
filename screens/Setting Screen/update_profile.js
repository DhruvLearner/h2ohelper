import { View, Text, TextInput, Image } from 'react-native'
import React , {useEffect}from 'react'
import { StyleSheet } from 'react-native';
import { useState } from 'react';
import Colors from '../../colors';
import { darkTheme, lightTheme } from  '../../colors';
import { TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { updateUserInfo } from '../../Redux/slice/setting_slice';


const EditProfile = () => {
  const [colors, setColors] = useState(null);
  const isDarkTheme = useSelector((state) => state.setting.darkTheme); 
    useEffect(() => {
        if (isDarkTheme == true) {
            setColors(darkTheme)
        }else{
            setColors(lightTheme)
        }
    }, [isDarkTheme]);
  const dUser = useSelector((state)=>state.setting.user);
  const [fullName, setFullName] = useState(dUser ? dUser.name : '');
  const [weight, setWeight] = useState(dUser ? dUser.weight : '');
  const [height, setHeight] = useState(dUser ? dUser.height : '');

  const [selectedGender, setSelectedGender] = useState("Male");
  const dispatch = useDispatch();

  const handleGenderChange = (value) => {
    setSelectedGender(value)
  };

  const handleSaveClick = () => {
    const user = {
      name: fullName,
      gender: selectedGender,
      weight: weight,
      height: height,
    }
    dispatch(updateUserInfo(user));
  };
  
  return (
    <View style={[styles.container,{backgroundColor: colors?.secondaryColor}]}>
      <View style={styles.rowContainer}>
        <Text style={styles.label}>Full Name *</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Full Name"
          value={fullName}
          onChangeText={(text) => setFullName(text)}
        />
      </View>
      <Text style={styles.label}>Gender</Text>
      <View style={styles.switchMainCon}>
        <TouchableOpacity
          style={[
            styles.genderBtnStyle,{backgroundColor: colors?.genderBtn},
            selectedGender === 'Male' && styles.selectedUnitButton,
          ]}
          onPress={() => handleGenderChange('Male')}
        >
          <Text style={[selectedGender == 'Male' ? (styles.selectedBtnText,{color: isDarkTheme == 1 ? colors?.white : colors?.tipsBg}) : styles.selectedBtnText,(styles.btnTextStyle)]}>Male</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.genderBtnStyle,{backgroundColor: colors?.genderBtn},
            selectedGender === 'Female' && styles.selectedUnitButton,
          ]}
          onPress={() => handleGenderChange('Female')}
        >
          <Text style={[selectedGender == 'Female' ? (styles.selectedBtnText,{color: isDarkTheme == 1 ? colors?.white : colors?.tipsBg}) : styles.selectedBtnText,(styles.btnTextStyle)]}>Female</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.rowContainer}>
        <Text style={styles.label}>Weight</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Weight (kg)"
          keyboardType="numeric"
          value={weight}
          onChangeText={(text) => setWeight(text)}
        />
      </View>
      <View style={styles.rowContainer}>
        <Text style={styles.label}>Height</Text>
        <View style={styles.heightView}>
          <TextInput
            style={styles.heightInput}
            placeholder="Enter Height"
            keyboardType="numeric"
            value={height}
            onChangeText={(text) => setHeight(text)}
          />
          <Text >CM</Text>
        </View>
      </View>
      <TouchableOpacity onPress={handleSaveClick}>
        <View style={{backgroundColor: colors?.backgroundColor}}>
          <Text style={[styles.saveTextStyle,{color: colors?.lightColor}]}>Save</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default EditProfile;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    height: '100%'
  },

  rowContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    fontWeight: 'bold'
  },
  input: {
    width: '100%',
    height: 40,
    padding: 8,
    backgroundColor: '#eeeeee',
    borderRadius: 8,
  },
  switchMainCon: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    paddingBottom: 12,
    justifyContent: 'space-between',
    alignItems: 'center',

  },
  btnTextStyle: {
    textAlign: 'center',
    fontWeight: 'bold'
  },
  genderBtnStyle: {
    width: '50%',
    borderRadius: 4,
    paddingVertical: 12,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  selectedUnitButton: {
    backgroundColor: Colors.lightColor,
  },
  heightView: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  heightInput: {
    height: 40,
    padding: 8,
    width: '30%',
    backgroundColor: '#eeeeee',
    borderRadius: 8,
    marginRight: 20,
  },
  saveTextStyle: {
    fontSize: 22,
    fontWeight: 'bold',
    margin: 10,
    textAlign: 'center'
  }


});