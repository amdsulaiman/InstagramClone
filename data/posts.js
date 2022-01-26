import { USERS  } from "./users";

export const POSTS = [
{
imageUrl : 'https://media.istockphoto.com/photos/yellow-background-with-copy-space-suitable-for-stories-picture-id1322647225?b=1&k=20&m=1322647225&s=170667a&w=0&h=dUBZLq1ONFHLtwQV1-p8WiB_NztyI7RNNSa6P9idiuA=',
user : USERS[0].user,
likes : 780,
caption : 'There is no such thing as a perfect person, but someone’s heart can have a perfect intention.',
profilePicture :  USERS[0].image,
comments : [
    {
        user : 'John',
        comment: 'Hella heart eyes for you.'
    },
    {
        user : 'David',
        comment: 'If there would be an award for being lazy, I would send someone to pick it up for me.'
    },
],
},
{
    imageUrl : 'https://images.unsplash.com/photo-1610308372239-754100574f58?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    user : USERS[1].user,
    likes : 790,
    caption : 'Beautiful',
    profilePicture :  USERS[1].image,
    comments : [
        {
            user : 'John',
            comment: 'Wow!'
        },
        {
            user : 'David',
            comment: 'Nice'
        },
    
    ],
    },
    {
        imageUrl : 'https://images.unsplash.com/photo-1579176647030-bd86f6fd4e1e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aW5zdGFncmFtJTIwcHJvZmlsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        user : USERS[2].user,
        likes : 78,
        caption : 'Beautiful',
        profilePicture :  USERS[2].image,
        comments : [
            {
                user : 'John',
                comment: 'Wow!'
            },
            {
                user : 'David',
                comment: 'Nice'
            },
        
        ],
        },
        {
            imageUrl : 'https://images.unsplash.com/photo-1550792173-5220eacae50e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80',
            user : USERS[3].user,
            likes : 900,
            caption : 'Beautiful',
            profilePicture :  USERS[3].image,
            comments : [
                {
                    user : 'John',
                    comment: 'Wow!'
                },
                {
                    user : 'David',
                    comment: 'Nice'
                },
            
            ],
            },
            {
                imageUrl : 'https://images.unsplash.com/photo-1612535500858-06e800115812?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGluc3RhZ3JhbSUyMHByb2ZpbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                user : USERS[4].user,
                likes : 90,
                caption : 'Beautiful',
                profilePicture :  USERS[4].image,
                comments : [
                    {
                        user : 'John',
                        comment: 'Wow!'
                    },
                    {
                        user : 'David',
                        comment: 'Excellent'
                    },
                
                ],
                },


]