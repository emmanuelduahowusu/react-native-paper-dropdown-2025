# ISC License

ISC License

Copyright (c) 2025, Emmanuel Duah Owusu

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.

---

# React Native Paper Dropdown

A customizable accordion-style dropdown component for React Native, built using `react-native-paper`.

## Features
- Displays a dropdown with options.
- Allows selection of a single option.
- Customizable placeholder and icon.
- Lightweight and easy to integrate.

---

## Installation

Install the component via npm:
npm install react-native-paper
npm install react-native-paper-dropdown-2025

## Usage Example

import { useEffect, useState } from "react";
import { View, ScrollView,StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Dropdown from "react-native-paper-dropdown-2025";


export default function login(){

    const [domains, setDomains] = useState<{key:string; value:string}[]>([])
    
    const myoptions: {key:string; value:string}[] =[
        {key: '.emporia.edu', value: 'Emporia State University'},
        {key: '.school1.edu', value: 'School1 University'},
        {key: '.school2.edu', value: 'School2 University'}
      ]

    useEffect(() => {
        async function GetSchools() {
          
          setDomains(myoptions)
        };  
        GetSchools();
    
    }, [])

    
    const [selectedSchool, setSelectedSchool] = useState<string | null>(null);


    const handleSelect = (option: { key: string; value: string }) => {
        console.log(`Selected School: ${option.value} (Key: ${option.key})`);
        console.log(option.key)
        setSelectedSchool(option.value);
      };



return(

<ScrollView>
    <SafeAreaView>
    <View>

        <Dropdown
    placeholder="Select your school"
    options={domains}
    iconcolor="lightblue"
    iconname="school"
    onSelect={handleSelect}
    containerStyle={styles.container} //Optional field for style cusomization
    accordionStyle={styles.accordion}//Optional field for style cusomization
    listItemStyle={styles.listItem}//Optional field for style cusomization
    titleStyle={styles.title}
     />
    </View>



    </SafeAreaView>
    
</ScrollView>
    

);



}

const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
    },
    accordion: {
      backgroundColor: 'white', 
      borderWidth: 1,
      borderColor: '#C5C19D',
      borderRadius: 5,
    },
    listItem: {
      paddingVertical: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#ddd', 
    },
    title: {
        color: '#000',
      },
  });




## Contributing
Contributions are welcome! Feel free to open issues or submit pull requests on GitHub.

## License
This project is licensed under the ISC License - see the LICENSE file for details.

## Author
Emmanuel Duah Owusu
