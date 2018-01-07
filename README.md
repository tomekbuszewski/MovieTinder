# MovieTinder
## Description
Simple app built with React that fetches items (movies) from an external API and presents them in a card-styled list. Each item can be selected as „accepted” or „rejected”, yet those choices aren’t stored anywhere (yet, perhaps).

## Code
Like I said before, I used React with a couple of additional components and services, most notably [*Axios*](https://github.com/axios/axios) for asynchronous data fetching, [*BEM Classname Builder*](https://github.com/tomekbuszewski/ClassNameBuilder) for easier class names constructing when using  BEM and [*React Swipeable*](https://github.com/dogfessional/react-swipeable) for swipe gestures.

Components and containers are mostly tested with [*Jest*](https://facebook.github.io/jest/). I didn’t test strictly presentational components like _EmptyState_, since they don’t have any logic and writing snapshots for those is redundant.