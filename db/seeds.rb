puts "Seeding y'all..."

Website.create(name: "impactABillion", gif: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMzMxMWYxNDg0NmZhNDFjNzcyNjIwZWY5ZTFhYWQ0YjQ5ZjU3NmIwYiZjdD1n/JceLaiOnZUFM8rcdoT/giphy.gif", address: "https://impactabillion.onrender.com/", image: "https://2.bp.blogspot.com/_JyEqAjSxEn0/TDzgTsjhxII/AAAAAAAAB7A/Wj4pv8y9XsU/s400/Edit_Water_Drops_0082.JPG", description: "Software solution for community building, service opportunities, and creative gatherings. Backend heavy. In the process of converting to mobile app.", technologies: "Ruby on Rails, ActiveRecord, React, Material UI")

Website.create(name: "Georgia Wildlife", gif: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYmZkZDA1OGMwMGRhZDZhNWE4YTVhNmQwMzI3NjNlMzVlNjBhZWQ0OSZjdD1n/PJ6K5SacrMfiHh8mm6/giphy.gif", address: "https://gawildlife.onrender.com/", image: "https://www1.nyc.gov/assets/wildlifenyc/images/content/pages/Stag_On_A_Hill.jpg", description: "Application for children to learn about naturally occurring wildlife and threatened animals in the state of Georgia.", technologies: "Ruby on Rails, ActiveRecord, React, Styled Components")

Website.create(name: "Lake Claire Community for the Unhoused", address: "https://lakeclaireunhoused.onrender.com/", gif: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYjkwZmYxNWViNThiOTNlZWY1NGRhZTI1OGFjOTEwNzQ4MTNhOGZkNCZjdD1n/GyOxOHenV9F2M7nUIm/giphy.gif", description: "Mock mobile application for managers and clients of the unhoused community. More features to come.", technologies: "Ruby on Rails, ActiveRecord, React, Material UI")

puts "Finished seeding!"
