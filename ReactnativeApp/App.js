import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // FontAwesome for icons

export default function App() {
  return (
    <View style={styles.container}>

      {/* Search box */}
      <View style={styles.searchArea}>
        <Icon name="search" size={20} color="silver" style={styles.icon} />
        <Text style={styles.searchHint}>Search conditions, doctors...</Text>
      </View>

      {/* Title */}
      <Text style={styles.heading}>Let's find your doctor</Text>
      
      {/* Doctor List */}
      <View style={styles.doctorList}>
        <DoctorInfo name="Dr. John Smith" specialty="Dermatologist" score="4.9" />
        <DoctorInfo name="Dr. Anna Dinn" specialty="Psychologist" score="4.9" />
        <DoctorInfo name="Dr. Angela Rayez" specialty="Therapist" score="4.8" />
        <DoctorInfo name="Dr. Chris Bronte" specialty="Dentist" score="5.0" />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

// Reusable component for doctor info
const DoctorInfo = ({ name, specialty, score }) => (
  <View style={styles.info}>
    <Icon name="user-md" size={40} color="black" />
    <Text style={styles.doctorName}>{name}</Text>
    <Text style={styles.doctorSpecialty}>{specialty}</Text>

    {/* Star rating */}
    <View style={styles.ratingArea}>
      <Icon name="star" size={15} color="yellow" />
      <Text style={styles.ratingValue}>{score}</Text>
    </View>
  </View>
);

// Stylesheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0FF', // Light purple background
    alignItems: 'center',
    paddingTop: 80, // Top padding
  },
  searchArea: {
    flexDirection: 'row', // Align search icon with text
    backgroundColor: 'white',
    borderRadius: 20,
    width: 300,
    height: 50,
    alignItems: 'center',
    paddingHorizontal: 10,
    marginBottom: 20, // Spacing below the search box
  },
  icon: {
    marginRight: 10,
  },
  searchHint: {
    color: 'lightgrey',
    fontSize: 16,
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 18, // Title font size
    textAlign: 'left',
    width: '100%',
    paddingLeft: 40,
    marginBottom: 20, // Spacing below the title
  },
  doctorList: {
    flexDirection: 'row', // Two doctor boxes per row
    flexWrap: 'wrap', // Allow wrapping to next line
    justifyContent: 'space-between',
    width: '90%',
  },
  info: {
    backgroundColor: 'white',
    width: '45%', // Width for two boxes per row
    padding: 15, // Padding inside the box
    borderRadius: 10,
    marginBottom: 20, // Spacing between rows
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5, // Add effects to  shadow
  },
  doctorName: {
    fontWeight: 'bold',
    marginTop: 10,
  },
  doctorSpecialty: {
    color: 'grey',
    fontSize: 14,
    marginTop: 5,
  },
  ratingArea: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#8A2BE2', // Purple rating box
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
    marginTop: 10,
  },
  ratingValue: {
    color: 'white',
    marginLeft: 5,
    fontWeight: 'bold',
  },
});
