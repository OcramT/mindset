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
MeditationPack.destroy_all
UserPack.destroy_all
CompletedMeditation.destroy_all

ApplicationRecord.connection.reset_pk_sequence!('users')
ApplicationRecord.connection.reset_pk_sequence!('meditations')
ApplicationRecord.connection.reset_pk_sequence!('packs')
ApplicationRecord.connection.reset_pk_sequence!('meditation_packs')
ApplicationRecord.connection.reset_pk_sequence!('user_packs')
ApplicationRecord.connection.reset_pk_sequence!('completed_meditations')
ActiveRecord::Base.connection.reset_pk_sequence!('packs')

#Test Users
testUser1 = User.create!({username: 'gr8bigweil', email: 'weil@whale.com', password: 'password123'})
testUser2 = User.create!({username: 'brekkiesando', email: 'brekke@brick.com', password: 'password123'})
testUser3 = User.create!({username: 'ocramt', email: 'ocram@marco.com', password: 'password123'})
dummyUser = User.create!({username: "User", email: "user@mail.com", password: "password123"});

#Test Meditations
testMed1 = Meditation.create!({id: 1, title: 'Breathing', category: 'Foundations', url: 'https://www.uclahealth.org/marc/mpeg/01_Breathing_Meditation.mp3', duration: 5})
testMed3 = Meditation.create!({id: 2, title: 'Complete Meditation', category: 'Foundations', url: 'https://www.uclahealth.org/marc/mpeg/03_Complete_Meditation_Instructions.mp3', duration: 19})
testMed7 = Meditation.create!({id: 3, title: 'Body Scan', category: 'Foundations', url: 'https://www.uclahealth.org/marc/mpeg/Body-Scan-Meditation.mp3', duration: 3})
testMed2 = Meditation.create!({id: 4, title: 'Breath, Sound, Body', category: 'Health', url: 'https://www.uclahealth.org/marc/mpeg/02_Breath_Sound_Body_Meditation.mp3', duration: 12})
testMed8 = Meditation.create!({id: 5, title: 'Body Scan for Sleep', category: 'Health', url: 'https://www.uclahealth.org/marc/mpeg/Body-Scan-for-Sleep.mp3', duration: 13})
testMed6 = Meditation.create!({id: 6, title: 'Body and Sound', category: 'Health', url: 'https://www.uclahealth.org/marc/mpeg/Body-Sound-Meditation.mp3', duration: 3})
testMed4 = Meditation.create!({id: 7, title: 'Working with Difficulties', category: 'Wellness', url: 'https://www.uclahealth.org/marc/mpeg/04_Meditation_for_Working_with_Difficulties.mp3', duration: 7})
testMed5 = Meditation.create!({id: 8, title: 'Loving Kindness', category: 'Wellness', url: 'https://www.uclahealth.org/marc/mpeg/05_Loving_Kindness_Meditation.mp3', duration: 9})

#Test Packs
testPack1 = Pack.create!({id: 1, name: 'Basics', category: 'Foundations'})
testPack2 = Pack.create!({id: 2, name: 'Basics 2', category: 'Foundations'})
testPack3 = Pack.create!({id: 3, name: 'Basics 3', category: 'Foundations'})
testPack4 = Pack.create!({id: 4, name: 'Managing Anxiety', category: 'Health'})
testPack5 = Pack.create!({id: 5, name: 'Letting Go of Stress', category: 'Health'})
testPack6 = Pack.create!({id: 6, name: 'Sleep Health', category: 'Health'})
testPack7 = Pack.create!({id: 7, name: 'Self-esteem', category: 'Wellness'})
testPack8 = Pack.create!({id: 8, name: 'Relationships', category: 'Wellness'})
testPack9 = Pack.create!({id: 9, name: 'Appreciation', category: 'Wellness'})

#Meditation Pack Joins
MeditationPack.create({pack_id: 1, meditation_id: 1}) #Basics
MeditationPack.create({pack_id: 1, meditation_id: 2}) #Basics
MeditationPack.create({pack_id: 1, meditation_id: 3}) #Basics
MeditationPack.create({pack_id: 2, meditation_id: 1}) #Basics 2
MeditationPack.create({pack_id: 2, meditation_id: 2}) #Basics 2
MeditationPack.create({pack_id: 2, meditation_id: 3}) #Basics 2
MeditationPack.create({pack_id: 3, meditation_id: 1}) #Basics 3
MeditationPack.create({pack_id: 3, meditation_id: 2}) #Basics 3
MeditationPack.create({pack_id: 3, meditation_id: 3}) #Basics 3
MeditationPack.create({pack_id: 4, meditation_id: 4}) #Managing Anxiety
MeditationPack.create({pack_id: 4, meditation_id: 5}) #Managing Anxiety
MeditationPack.create({pack_id: 4, meditation_id: 6}) #Managing Anxiety
MeditationPack.create({pack_id: 5, meditation_id: 4}) #Letting Go of Stress
MeditationPack.create({pack_id: 5, meditation_id: 5}) #Letting Go of Stress
MeditationPack.create({pack_id: 5, meditation_id: 6}) #Letting Go of Stress
MeditationPack.create({pack_id: 6, meditation_id: 4}) #Sleep Health
MeditationPack.create({pack_id: 6, meditation_id: 5}) #Sleep Health
MeditationPack.create({pack_id: 6, meditation_id: 6}) #Sleep Health
MeditationPack.create({pack_id: 7, meditation_id: 7}) #Self-esteem
MeditationPack.create({pack_id: 7, meditation_id: 8}) #Self-esteem
MeditationPack.create({pack_id: 8, meditation_id: 7}) #Relationships
MeditationPack.create({pack_id: 8, meditation_id: 8}) #Relationships
MeditationPack.create({pack_id: 9, meditation_id: 7}) #Appreciation
MeditationPack.create({pack_id: 9, meditation_id: 8}) #Appreciation

