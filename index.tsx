import React, { useState } from 'react';
import { StyleSheet, View, ViewStyle, TextStyle } from 'react-native';
import { List } from 'react-native-paper';

export interface Option {
  key: string;
  value: string;
}

export interface AccordionDropdownProps {
  options: Option[];
  placeholder: string;
  onSelect: (option: Option) => void;
  iconname: string;
  iconcolor: string;
  containerStyle?: ViewStyle; // Custom style for the container
  accordionStyle?: ViewStyle; // Custom style for the accordion
  listItemStyle?: ViewStyle; // Custom style for the list items
  titleStyle?: TextStyle; // Custom style for the accordion title
}

const Dropdown: React.FC<AccordionDropdownProps> = ({
  options,
  placeholder,
  onSelect,
  iconname,
  iconcolor,
  containerStyle,
  accordionStyle,
  listItemStyle,
  titleStyle,
}) => {
  const [expanded, setExpanded] = useState(false);
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);

  const handlePress = () => setExpanded(!expanded);

  const handleSelect = (option: Option) => {
    setSelectedOption(option);
    onSelect(option);
    setExpanded(false);
  };

  return (
    <View style={[styles.container, containerStyle]}>
      <List.Accordion
        title={selectedOption?.value || placeholder}
        left={(props) => <List.Icon {...props} icon={iconname} color={iconcolor} />}
        expanded={expanded}
        onPress={handlePress}
        style={[styles.accordion, accordionStyle]}
        titleStyle={[styles.title, titleStyle]}
        children={null}
      >
        {options.map((option) => (
          <List.Item
            key={option.key}
            title={option.value}
            onPress={() => handleSelect(option)}
            style={[styles.listItem, listItemStyle]}
          />
        ))}
      </List.Accordion>
    </View>
  );
};

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

export default Dropdown;

