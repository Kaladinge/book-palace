# Book Palace

![project screenshot](/images/overview.png)

A book website allowing customers to browse books and to add books to and remove books the cart. Admin users can add new book entries and edit/delete existing entries.


## Description

A fully responsive mode of an e-commerce site for selling books. There is a customer-facing and an admin section. The project make use
of an API that is publicly hosted.

For the customer possible actions are:

- Using the Get method to:
  1. display all entries from the API
  2. display single entries with the id retrieved from the URL parameter

- Toggle books in and out of cart and display these on a separate page
- Search for books in the API library.

For the admin possible actions are:
- Using the Post method to add new entries
- Using the PUT method to edit properties of  existing entries
- Using the delete method to delete existing entries


## Built With

Tech stacks include:

- [Bootstrap](https://getbootstrap.com)
- [Strapi](https://https://strapi.io/) (as a headless CMS)
- [Heroku](https://id.heroku.com/) (for hosting the API)


## Getting Started

### Installing

1. Clone the repo:

```bash
git clone git@github.com:Kaladinge/book-palace.git
```

2. Install extension:

The below method is an example of how to run the app locally, but feel free to use any local server for this.

- Open project in Visual Studio Code (VSC). 
- Search for the Live Server extension (by Ritwick Dey) under the extension tab to the left and install this.

### Running

To run the app, do the following:

Right click on the index.html file and choose "Open with Live Server" and the file will open in your selected browser.


## Contributing

To make comments and suggestions make sure to open a pull request by the following steps:

1. From the repo page, click on the **Fork** button in the top-right corner.
2. Clone the repo as described above (***Installing***).
3. Create a new branch with the following command:
   ```bash
    git checkout -b new_branch
    ```
4. Create a new remote for the upstream repo with the command:
   ```bash
    git remote add upstream https://github.com/<original reponame>/demo
    ```
    where original reponame refers to the original repo you created your fork from.
5. Make changes and push it to the new branch
6. Once changes has been done click on the **Compare & Pull request** button on your repo.
7. Now click on the **Create Pull request** button that appear. 


## Contact

[My LinkedIn page](www.linkedin.com/in/lars-inge-g-johnsen)
