import { SafeAreaView, ScrollView, StyleSheet, Text, View , TextInput,} from 'react-native'
import React ,{useState} from 'react'
import InfoCard from '@/components/info';
import { Picker } from '@react-native-picker/picker';


// interface IncidentFormData {
//   sgbvCategory: string;
//   sgbvIncident: string;
//   description: string;
//   gender: string;
//   phoneNumber: string;
//   email: string;
//   location: string;
//   perpetratorNames: string;
// }

export default function ReportingScreenView() {


  const [formData, setFormData] = useState({
    sgbvCategory: '',
    sgbvIncident: '',
    description: '',
    gender: '',
    phoneNumber: '',
    email: '',
    location: '',
    perpetratorNames: '',
  });

  const genderOptions = [
    { label: 'Rather not say...', value: 'not_specified' },
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' },
    { label: 'Other', value: 'other' },
  ];

  const sgbvCategories = [
    { label: 'Select a category', value: '' },
    { label: 'Physical Violence', value: 'physical' },
    { label: 'Sexual Violence', value: 'sexual' },
    { label: 'Emotional Violence', value: 'emotional' },
    { label: 'Economic Violence', value: 'economic' },
  ];


  const handleSubmit = () => {
    // Handle form submission
    console.log('Form Data:', formData);
  };


  return (
    <SafeAreaView className='bg-white '>
      <ScrollView className='w-full'>
          <View className='px-6'>
          
            <InfoCard 
                infoText={'Fill the field below to report and incident , remember this reports are submitted fast , securely and anonymously.In a case where you can’t fill the form press the panic button'}  
                btnText={'SOS PANIC Button'}
            />

            {/* form section */}
            <View id="form-section" className="mt-6">
                {/* SGBV Category */}
                <View className="mb-4">
                  <Text className="text-gray-700 mb-2 font-medium">SGBV Category</Text>
                  <View className="border border-border rounded-md">
                    <Picker
                      selectedValue={formData.sgbvCategory}
                      onValueChange={(value) =>
                        setFormData({ ...formData, sgbvCategory: value })
                      }
                      className="h-12"
                    >
                      {sgbvCategories.map((category) => (
                        <Picker.Item
                          key={category.value}
                          label={category.label}
                          value={category.value}
                        />
                      ))}
                    </Picker>
                  </View>
                </View>

                {/* SGBV Incident */}
                <View className="mb-4">
                  <Text className="text-gray-700 mb-2 font-medium">SGBV Incident</Text>
                  <View className="border border-border rounded-md">
                    <Picker
                      selectedValue={formData.sgbvIncident}
                      onValueChange={(value) =>
                        setFormData({ ...formData, sgbvIncident: value })
                      }
                      className="h-12"
                    >
                      <Picker.Item label="Select a category" value="" />
                      {/* Add incident types based on selected category */}
                    </Picker>
                  </View>
                </View>

                {/* Description */}
                <View className="mb-4">
                  <Text className="text-gray-700 mb-2 font-medium">
                    Describe what happened
                  </Text>
                  <TextInput
                    multiline
                    numberOfLines={4}
                    value={formData.description}
                    onChangeText={(text) =>
                      setFormData({ ...formData, description: text })
                    }
                    placeholder="What happened..."
                    className="border border-border rounded-md p-2 h-24 text-base"
                    textAlignVertical="top"
                  />
                </View>

                {/* Gender */}
                <View className="mb-4">
                  <Text className="text-gray-700 mb-2 font-medium">
                    Gender of the affected Person
                  </Text>
                  <View className="border border-border rounded-md">
                    <Picker
                      selectedValue={formData.gender}
                      onValueChange={(value) =>
                        setFormData({ ...formData, gender: value })
                      }
                      className="h-12"
                    >
                      {genderOptions.map((option) => (
                        <Picker.Item
                          key={option.value}
                          label={option.label}
                          value={option.value}
                        />
                      ))}
                    </Picker>
                  </View>
                </View>

                {/* Phone Number */}
                <View className="mb-4">
                  <Text className="text-gray-700 mb-2 font-medium">Your Phone No.</Text>
                  <TextInput
                    value={formData.phoneNumber}
                    onChangeText={(text) =>
                      setFormData({ ...formData, phoneNumber: text })
                    }
                    placeholder="00000-000"
                    keyboardType="phone-pad"
                    className="border border-border rounded-md p-2 h-12 text-base"
                  />
                </View>

                {/* Email */}
                <View className="mb-4">
                  <Text className="text-gray-700 mb-2 font-medium">
                    Your Email Address
                  </Text>
                  <TextInput
                    value={formData.email}
                    onChangeText={(text) => setFormData({ ...formData, email: text })}
                    placeholder="help@"
                    keyboardType="email-address"
                    className="border border-border rounded-md p-2 h-12 text-base"
                  />
                </View>

                {/* Location */}
                <View className="mb-4">
                  <Text className="text-gray-700 mb-2 font-medium">
                    Location of the Incident
                  </Text>
                  <TextInput
                    value={formData.location}
                    onChangeText={(text) => setFormData({ ...formData, location: text })}
                    placeholder="Kahawa Wendani"
                    className="border border-border rounded-md p-2 h-12 text-base"
                  />
                </View>

                {/* Perpetrator Names */}
                <View className="mb-4">
                  <Text className="text-gray-700 mb-2 font-medium">
                    Perpetrator(s) Names
                  </Text>
                  <TextInput
                    value={formData.perpetratorNames}
                    onChangeText={(text) =>
                      setFormData({ ...formData, perpetratorNames: text })
                    }
                    placeholder="John Doe"
                    className="border border-border rounded-md p-2 h-12 text-base"
                  />
                </View>
            </View>

          </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})