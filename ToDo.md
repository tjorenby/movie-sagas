-- TO DO --

[] DATABASE
    [X] Create a database named `saga_movies_weekend`
    [X] Run the queries from `database.sql` on the `saga_movies_weekend` database.
    [] A movie could have many genres. You will need to create the junction table between the `movies` and `genres` tables! It will be helpful to have some data for that junction table added.


CLIENT SIDE

    --COMPONENTS--

        []HOME
            []Display All Movies from db (.map) (Carousel style)

            [] onClick should display movie information (Image pop-out w/ a close button)
                []Details need to show ALL GENRES
                [] BUTTON to close the pop-out

        [] DETAILS COMPONENT
            [] Replaced with an image pop-out card  


        [] ADD MOVIE COMPONENT
            []Input Fields
                []Movie Title
                []Movie Poster (image URL)
                [] Text Area (movie description)
                [] Dropdown Menu for Genres

            [] BUTTONS
                []Cancel Button - Brings user to HOME component ('/')
                [] SAVE Button    
