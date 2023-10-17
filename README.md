# Wayfarer - Travel

## Project Description
Wayfarer Travel is a travel community platform that empowers users to share city-specific tips, posts, and logs about their favorite locations around the globe. Whether you're a local or a traveler, Wayfarer Travel brings you invaluable insights straight from people who know the city best.


## Table of Contents
- [Features](#features)
- [Project Approach](#project-approach)
- [Entity-Relationship Diagram (ERD)](#entity-relationship-diagram-erd)
- [Tools and Technologies Used](#tools-and-technologies-used)
- [Hurdles Encountered During Development](#hurdles-encountered-during-development)
- [Resources & Acknowledgements](#resources--acknowledgements)
## Features

* User can search for information pertaining to a searched city.

## Project Approach 

We employed a combination of tools and practices to streamline our development process. Driver navigator, a critical component, allowed us to efficiently manage code collaborations. It enabled us to switch roles between driver and navigator during pair programming sessions, enhancing code quality through real-time code review and constructive feedback. In tandem with Git branches, our version control system, we maintained a clean and organized codebase. Branches allowed us to work on features and bug fixes separately, mitigating conflicts and ensuring code stability. Additionally, we used huddles to foster communication and collaboration within the team. These brief, focused meetings served as a platform to discuss progress, share insights, and address any challenges promptly. The combination of these tools and practices enabled us to work cohesively, maintain code integrity, and stay on track with our project milestones.

### User-Centric Design

<details>
  <summary>Landing Page</summary>
  <strong>User Story</strong>: Navigate to "/" and see a basic splash page with the name of the website. <br>
  <strong>User Story</strong>: See the site-wide header on every page with a link to home page with list of cities.<br> 
</details>
<details>
  <summary>Home Page</summary>
  <strong>User Story</strong>: 
  View the "San Francisco" page (at "/cities/1") including:

  * The site-wide header.
  * The name of the city.
  * An iconic photo of the city. 

  <br>
  <strong>User Story</strong>: View a list of posts on the San Francisco page:

  * Sorted by newest first.
  * With the post titles linked to the individual post "show" pages.

  <br> 
  <strong>User Story</strong>: Use the search bar to search through the posts' title and/or content. 

  <br>

  <strong>User Story</strong>: Click on the title of one of their posts and be redirected to a "show" page for that post.
  <br>

  <strong>User Story</strong>: View post "show" pages with title, author, and content. 
  <br>

</details>
<details>
  <summary>Data Requirements</summary>
  <strong>User Story</strong>: A user should be able to

1. View city pages for "London" and "Gibraltar".
2. A post's title must be between 1 and 200 characters.
3. A post's content must not be empty. 
<br>

</details>
<details>

  <summary>Weather API</summary>
  <strong>User Story</strong>: Call [Open Weather API](https://openweathermap.org/current) for each city to display the current weather on each city's page.

 <br>
</details>
 
### Entity-Relationship Diagram (ERD)

![ERD Diagram Image](wayfarer\src\assets\images\erd1.png)
![ERD Diagram Image](wayfarer\src\assets\images\erd2.png)

## Tools and Technologies Used

- **Documentation:** Well-documented codebase.
- **GitHub:** Version control and collaboration platform.


## Hurdles Encountered During Development

* During our project development, we faced a few key hurdles. One significant challenge was CSS styling, which required meticulous attention to detail to ensure a polished and cohesive user interface. Implementing maps posed another obstacle as we integrated location-based features, coordinating various components effectively. Creating a dynamic and responsive webpage, capable of adapting to different screen sizes and user interactions, demanded ongoing testing and refinement.

* Integrating Leaflet with OpenWeatherAPI presented several challenges that impeded the smooth implementation of weather radar functionality in our application. In our experience, the attempt to combine Leaflet with OpenWeatherAPI resulted in a complete failure to display any weather radar data at all. Despite our best efforts to debug and troubleshoot, we couldn't resolve the issues within the Leaflet framework. This was a significant hurdle, and given the time-sensitive nature of our project, we couldn't afford to remain stuck on this problem. As a result, we chose to switch to OpenLayers, which not only provided greater flexibility but also allowed us to successfully implement and display the real-time weather radar layers we needed for our application.

**Despite these challenges, our team's collaborative efforts and innovative problem-solving led to the successful realization of our project goals.**


## Resources & Acknowledgements



### General Assembly Instructors
- Suresh Sigera: [GitHub](https://github.com/sureshmelvinsigera)
- Dhrubo Chowdhury: [GitHub](https://github.com/Dhrubo-Chowdhury)
- Leonardo Rodriguez: [GitHub](https://github.com/LRodriguez92)

### Links

## Contributors
- Gabrielle Handy: [GitHub](https://github.com/GabrielleHandy) | [LinkedIn](https://www.linkedin.com/in/gabriellehandyswe/)
 - Elizabeth Yang: [GitHub](https://github.com/lizabawa) | [LinkedIn](https://www.linkedin.com/in/elizabeth-a-yang/)
 - River Dejesus: [GitHub](https://github.com/TheProgrammingRiver) | [LinkedIn](https://www.linkedin.com/in/river-dejesus/)
  - JP Bacquet: [Github](https://github.com/jeanpolbac) | [LinkedIn](https://www.linkedin.com/in/jpbacquet/)


