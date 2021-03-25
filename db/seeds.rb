# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Meditation.destroy_all
Pack.destroy_all

ApplicationRecord.connection.reset_pk_sequence!('users')
ApplicationRecord.connection.reset_pk_sequence!('meditations')
ApplicationRecord.connection.reset_pk_sequence!('packs')

#Test Users
testUser1 = User.create!({username: 'gr8bigweil', email: 'weil@whale.com', password: 'password123'})
testUser2 = User.create!({username: 'brekkiesando', email: 'brekke@brick.com', password: 'password123'})
testUser3 = User.create!({username: 'ocramt', email: 'ocram@marco.com', password: 'password123'})
dummyUser = User.create!({username: "User", email: "user@mail.com", password: "password123"});

#Test Meditations
testMed1 = Meditation.create!({title: 'Breathing', category: 'Foundations', url: 'https://www.uclahealth.org/marc/mpeg/01_Breathing_Meditation.mp3', duration: 5})
testMed2 = Meditation.create!({title: 'Breath, Sound, Body', category: 'Health', url: 'https://www.uclahealth.org/marc/mpeg/02_Breath_Sound_Body_Meditation.mp3', duration: 12})
testMed3 = Meditation.create!({title: 'Complete Meditation', category: 'Foundations', url: 'https://www.uclahealth.org/marc/mpeg/03_Complete_Meditation_Instructions.mp3', duration: 19})
testMed4 = Meditation.create!({title: 'Working with Difficulties', category: 'Wellness', url: 'https://www.uclahealth.org/marc/mpeg/04_Meditation_for_Working_with_Difficulties.mp3', duration: 7})
testMed5 = Meditation.create!({title: 'Loving Kindness', category: 'Wellness', url: 'https://www.uclahealth.org/marc/mpeg/05_Loving_Kindness_Meditation.mp3', duration: 9})
testMed6 = Meditation.create!({title: 'Body and Sound', category: 'Health', url: 'https://www.uclahealth.org/marc/mpeg/Body-Sound-Meditation.mp3', duration: 3})
testMed7 = Meditation.create!({title: 'Body Scan', category: 'Foundations', url: 'https://www.uclahealth.org/marc/mpeg/Body-Scan-Meditation.mp3', duration: 3})
testMed8 = Meditation.create!({title: 'Body Scan for Sleep', category: 'Health', url: 'https://www.uclahealth.org/marc/mpeg/Body-Scan-for-Sleep.mp3', duration: 13})

#Test Packs
testPack1 = Pack.create!({name: 'Basics', category: 'Foundations'})
testPack2 = Pack.create!({name: 'Basics 2', category: 'Foundations'})
testPack3 = Pack.create!({name: 'Basics 3', category: 'Foundations'})
testPack4 = Pack.create!({name: 'Managing Anxiety', category: 'Health'})
testPack5 = Pack.create!({name: 'Letting Go of Stress', category: 'Health'})
testPack6 = Pack.create!({name: 'Sleep Health', category: 'Health'})
testPack7 = Pack.create!({name: 'Self-esteem', category: 'Wellness'})
testPack8 = Pack.create!({name: 'Relationships', category: 'Wellness'})
testPack9 = Pack.create!({name: 'Appreciation', category: 'Wellness'})
