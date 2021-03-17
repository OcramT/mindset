# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

testUser1 = User.create({username: 'gr8bigweil', email: 'weil@whale.com', password: 'password123'})
testUser2 = User.create({username: 'brekkiesando', email: 'brekke@brick.com', password: 'password123'})
testUser3 = User.create({username: 'ocramt', email: 'ocram@marco.com', password: 'password123'})