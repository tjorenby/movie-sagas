-- TO DO --

[] DATABASE
    [X] Create a database named `saga_movies_weekend`
    [X] Run the queries from `database.sql` on the `saga_movies_weekend` database.
    [] A movie could have many genres. You will need to create the junction table between the `movies` and `genres` tables! It will be helpful to have some data for that junction table added.


CLIENT SIDE

    --COMPONENTS--

        [X]HOME
            [X]Display All Movies from db (.map) (Carousel style)

            [X] onClick should display movie information (Image pop-out w/ a close button)
                [X]Details need to show ALL GENRES
                [X] BUTTON to close the pop-out

        [X] DETAILS COMPONENT
            [X] Replaced with an image pop-out card  


        [X] ADD MOVIE COMPONENT
            [X]Input Fields
                [X]Movie Title
                [X]Movie Poster (image URL)
                [X] Text Area (movie description)
                [X] Dropdown Menu for Genres

            [] BUTTONS
                []Cancel Button - Brings user to HOME component ('/')
                [] SAVE Button    
