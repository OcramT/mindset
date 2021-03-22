# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Meditation.destroy_all

ApplicationRecord.connection.reset_pk_sequence!('users')
ApplicationRecord.connection.reset_pk_sequence!('meditations')

#Test Users
testUser1 = User.create({username: 'gr8bigweil', email: 'weil@whale.com', password: 'password123'})
testUser2 = User.create({username: 'brekkiesando', email: 'brekke@brick.com', password: 'password123'})
testUser3 = User.create({username: 'ocramt', email: 'ocram@marco.com', password: 'password123'})
dummyUser = User.create({username: "User", email: "user@mail.com", password: "password123"});

#Test Meditations
testMed1 = Meditation.create({title: 'Managing Anxiety', category: 'Wellness', url: 'https://www.uclahealth.org/marc/mpeg/01_Breathing_Meditation.mp3', duration: 5.31})
testMed2 = Meditation.create({title: 'Mental Chatter', category: 'Sleep', url: 'https://www.uclahealth.org/marc/mpeg/test2.mp3', duration: 20})
testMed3 = Meditation.create({title: 'Letting Go of Stress', category: 'Health', url: 'https://www.uclahealth.org/marc/mpeg/test3.mp3', duration: 10})


