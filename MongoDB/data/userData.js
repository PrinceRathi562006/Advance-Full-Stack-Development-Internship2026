const userData = [
{
name:"Ram",age:22,city:"Delhi",skills:["HTML","CSS"],wishlist:["iPhone","MacBook"],cart:[{product:"Laptop",qty:1}],likedPosts:["post1","post5"]
},
{
name:"Shyam",age:25,city:"Noida",skills:["JavaScript","React"],wishlist:["AirPods"],cart:[{product:"Keyboard",qty:2}],likedPosts:["post2","post8"]
},
{
name:"Amit",age:28,city:"Lucknow",skills:["Node.js","MongoDB"],wishlist:["Samsung S24"],cart:[{product:"Monitor",qty:1}],likedPosts:["post3"]
},
{
name:"Rahul",age:24,city:"Kanpur",skills:["React","Express"],wishlist:["iPad"],cart:[{product:"Mouse",qty:3}],likedPosts:["post1","post6"]
},
{
name:"Neha",age:23,city:"Jaipur",skills:["HTML","Bootstrap"],wishlist:["Kindle"],cart:[{product:"Chair",qty:1}],likedPosts:["post4"]
},
{
name:"Priya",age:27,city:"Pune",skills:["CSS","Tailwind"],wishlist:["MacBook"],cart:[{product:"Desk",qty:1}],likedPosts:["post2","post9"]
},
{
name:"Ankit",age:30,city:"Delhi",skills:["React","Node.js"],wishlist:["PS5"],cart:[{product:"Gamepad",qty:2}],likedPosts:["post7"]
},
{
name:"Riya",age:21,city:"Mumbai",skills:["JavaScript","MongoDB"],wishlist:["iPhone"],cart:[{product:"Speaker",qty:1}],likedPosts:["post10"]
},
{
name:"Vikas",age:29,city:"Agra",skills:["Express","Node.js"],wishlist:["Camera"],cart:[{product:"Tripod",qty:1}],likedPosts:["post3","post8"]
},
{
name:"Pooja",age:26,city:"Delhi",skills:["React","Tailwind"],wishlist:["Apple Watch"],cart:[{product:"Watch Strap",qty:2}],likedPosts:["post2"]
},
{
name:"Sachin",age:32,city:"Noida",skills:["MongoDB","Express"],wishlist:["Laptop"],cart:[{product:"SSD",qty:1}],likedPosts:["post4"]
},
{
name:"Rohit",age:23,city:"Indore",skills:["HTML","CSS","JavaScript"],wishlist:["Drone"],cart:[{product:"Bag",qty:2}],likedPosts:["post5"]
},
{
name:"Karan",age:31,city:"Delhi",skills:["React","Redux"],wishlist:["iPhone"],cart:[{product:"Headphones",qty:1}],likedPosts:["post1"]
},
{
name:"Meena",age:28,city:"Jaipur",skills:["Node.js"],wishlist:["Cycle"],cart:[{product:"Helmet",qty:1}],likedPosts:["post8"]
},
{
name:"Aisha",age:22,city:"Hyderabad",skills:["CSS","Tailwind"],wishlist:["Mac Mini"],cart:[{product:"Keyboard",qty:1}],likedPosts:["post6"]
},
{
name:"Varun",age:27,city:"Delhi",skills:["MongoDB","React"],wishlist:["Xbox"],cart:[{product:"Controller",qty:2}],likedPosts:["post9"]
},
{
name:"Nitin",age:35,city:"Lucknow",skills:["Express","Node.js"],wishlist:["Canon Camera"],cart:[{product:"Lens",qty:1}],likedPosts:["post2"]
},
{
name:"Komal",age:24,city:"Surat",skills:["React","HTML"],wishlist:["iPad"],cart:[{product:"Pen",qty:2}],likedPosts:["post10"]
},
{
name:"Deepak",age:29,city:"Bhopal",skills:["MongoDB","Node.js"],wishlist:["MacBook"],cart:[{product:"Router",qty:1}],likedPosts:["post7"]
},
{
name:"Sneha",age:20,city:"Delhi",skills:["HTML","CSS"],wishlist:["AirPods"],cart:[{product:"Phone Cover",qty:3}],likedPosts:["post4"]
},
{
name:"Arjun",age:26,city:"Kanpur",skills:["React","Express"],wishlist:["PlayStation"],cart:[{product:"TV",qty:1}],likedPosts:["post5"]
},
{
name:"Tina",age:25,city:"Mumbai",skills:["Bootstrap","CSS"],wishlist:["MacBook"],cart:[{product:"Lamp",qty:2}],likedPosts:["post3"]
},
{
name:"Yash",age:30,city:"Delhi",skills:["React","MongoDB"],wishlist:["iPhone"],cart:[{product:"Laptop",qty:1}],likedPosts:["post6"]
},
{
name:"Divya",age:27,city:"Noida",skills:["Node.js","Express"],wishlist:["iPad"],cart:[{product:"Mouse",qty:2}],likedPosts:["post2"]
},
{
name:"Harsh",age:24,city:"Agra",skills:["JavaScript","React"],wishlist:["Kindle"],cart:[{product:"Book",qty:5}],likedPosts:["post9"]
},
{
name:"Simran",age:23,city:"Delhi",skills:["Tailwind","React"],wishlist:["Apple Watch"],cart:[{product:"Charger",qty:1}],likedPosts:["post1"]
},
{
name:"Mohit",age:33,city:"Pune",skills:["MongoDB"],wishlist:["Gaming Laptop"],cart:[{product:"Cooling Pad",qty:1}],likedPosts:["post8"]
},
{
name:"Payal",age:28,city:"Delhi",skills:["HTML","CSS","React"],wishlist:["iPhone"],cart:[{product:"Keyboard",qty:1}],likedPosts:["post7"]
},
{
name:"Gaurav",age:26,city:"Jaipur",skills:["Express","Node.js"],wishlist:["Cycle"],cart:[{product:"Bottle",qty:2}],likedPosts:["post3"]
},
{
name:"Muskan",age:21,city:"Lucknow",skills:["MongoDB","React"],wishlist:["MacBook"],cart:[{product:"USB Hub",qty:1}],likedPosts:["post5"]
},
{
name:"Rakesh",age:29,city:"Delhi",skills:["JavaScript"],wishlist:["Samsung Fold"],cart:[{product:"Power Bank",qty:2}],likedPosts:["post2"]
},
{
name:"Sonia",age:24,city:"Noida",skills:["HTML","Tailwind"],wishlist:["iPhone"],cart:[{product:"Stand",qty:1}],likedPosts:["post9"]
},
{
name:"Aditya",age:31,city:"Indore",skills:["React","Redux"],wishlist:["Mac Studio"],cart:[{product:"Monitor",qty:2}],likedPosts:["post10"]
},
{
name:"Isha",age:22,city:"Delhi",skills:["CSS","Bootstrap"],wishlist:["Camera"],cart:[{product:"Tripod",qty:1}],likedPosts:["post1"]
},
{
name:"Tarun",age:27,city:"Kanpur",skills:["Node.js","MongoDB"],wishlist:["Laptop"],cart:[{product:"SSD",qty:2}],likedPosts:["post4"]
},
{
name:"Khushi",age:20,city:"Delhi",skills:["React"],wishlist:["AirPods"],cart:[{product:"Phone",qty:1}],likedPosts:["post6"]
},
{
name:"Abhishek",age:34,city:"Hyderabad",skills:["Express","React"],wishlist:["Drone"],cart:[{product:"Battery",qty:3}],likedPosts:["post8"]
},
{
name:"Nisha",age:25,city:"Surat",skills:["HTML","JavaScript"],wishlist:["MacBook"],cart:[{product:"Mouse",qty:1}],likedPosts:["post5"]
},
{
name:"Lokesh",age:28,city:"Delhi",skills:["MongoDB","Express"],wishlist:["Apple Watch"],cart:[{product:"Cable",qty:4}],likedPosts:["post3"]
},
{
name:"Anjali",age:23,city:"Pune",skills:["React","Tailwind"],wishlist:["iPhone"],cart:[{product:"Earbuds",qty:2}],likedPosts:["post7"]
},
{
name:"Vivek",age:30,city:"Noida",skills:["Node.js","React"],wishlist:["PS5"],cart:[{product:"Game",qty:5}],likedPosts:["post1"]
},
{
name:"Ritu",age:26,city:"Delhi",skills:["HTML","CSS"],wishlist:["Kindle"],cart:[{product:"Book",qty:2}],likedPosts:["post10"]
},
{
name:"Manish",age:29,city:"Lucknow",skills:["React","MongoDB"],wishlist:["MacBook"],cart:[{product:"Router",qty:1}],likedPosts:["post4"]
},
{
name:"Pankaj",age:35,city:"Delhi",skills:["Express","Node.js"],wishlist:["Samsung TV"],cart:[{product:"Remote",qty:2}],likedPosts:["post8"]
},
{
name:"Sakshi",age:22,city:"Jaipur",skills:["Tailwind","React"],wishlist:["iPad"],cart:[{product:"Stylus",qty:1}],likedPosts:["post5"]
},
{
name:"Ashish",age:27,city:"Kanpur",skills:["MongoDB","React"],wishlist:["iPhone"],cart:[{product:"Laptop",qty:1}],likedPosts:["post2"]
},
{
name:"Kriti",age:24,city:"Delhi",skills:["CSS","HTML"],wishlist:["MacBook"],cart:[{product:"Keyboard",qty:2}],likedPosts:["post9"]
},
{
name:"Naveen",age:32,city:"Agra",skills:["Node.js","Express"],wishlist:["Xbox"],cart:[{product:"Controller",qty:1}],likedPosts:["post6"]
},
{
name:"Raman",age:28,city:"Delhi",skills:["React","Redux","MongoDB"],wishlist:["Apple Watch"],cart:[{product:"Watch",qty:1}],likedPosts:["post1","post3"]
},
{
name:"Seema",age:23,city:"Mumbai",skills:["HTML","CSS","JavaScript"],wishlist:["iPhone","AirPods"],cart:[{product:"Speaker",qty:2}],likedPosts:["post4","post10"]
}
]

module.exports = userData;