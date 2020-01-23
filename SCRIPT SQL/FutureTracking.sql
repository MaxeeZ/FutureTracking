DROP TABLE IF EXISTS recipe;

CREATE TABLE recipe (
    id_recipe INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    category INT NOT NULL,
    description VARCHAR(255) NOT NULL,
    ingredients VARCHAR(255) NOT NULL,
    person INT NOT NULL,
    duration INT NOT NULL,
    level INT NOT NULL,
    url VARCHAR(255) NOT NULL
);

INSERT INTO recipe VALUES (1, "Jeanne's timpani", 0, "", "4 slices of smokeds salmon, 2 zucchini, 3 eggs, 10 cl thick fresh cream, 1 small garlic clove, 1 tablespoon olive oil, dill mint, salt, pepper", 4, 18, 1, "https://assets.afcdn.com/recipe/20140921/15292_w800h600c1cx1224cy1224.jpg");
INSERT INTO recipe VALUES (2, "Carpaccio of scallops with lemon caviar with lemon caviar", 0, "", "12 large scallops, 3 lemongrass sticks, 5 cl olive oil, 1 lemon caviar, 2 chervil branches", 4, 20, 1, "https://resize-elle.ladmedia.fr/r/618,769,force,ffffff/img/var/plain_site/storage/images/imports/repack/elle-a-table/carpaccio-de-saint-jacques-au-citron-caviar-3752811/89660275-2-fre-FR/Carpaccio-de-saint-jacques-au-citron-caviar.jpg");
INSERT INTO recipe VALUES (3, "Quiche Lorraine", 1, "", "200g shortcrust pastry, 200g bacon, 30g butter, 3 eggs, 20cl of fresh cream, 20cl milk, nutmeg, salt, pepper", 4, 60, 1, "https://assets.afcdn.com/recipe/20160404/37706_w1024h768c1cx1500cy1000.jpg");
INSERT INTO recipe VALUES (4, "Roast beef in the oven", 1, "", "400g barded beef roast, 1 garlic clove, 2 tablespoons olive oil, 12cl of water, 1 pepper, 1 salt, 1 thyme", 2, 45, 1, "https://s3.eu-central-1.amazonaws.com/media.quitoque.fr/recipe_w1536_h1024/recipes/images/roti-de-boeuf-au-thym-pommes-grenaille-et-blette-poelee/roti-de-boeuf-au-thym-pommes-grenaille-et-blette-poelee-2");
INSERT INTO recipe VALUES (5, "Potato gratin", 1, "", "1kg of potato, 60g grated cheese, 25cl of fresh cream, 30g butter, 1 garlic clove, pepper, salt", 4, 70, 1, "https://assets.afcdn.com/recipe/20180123/77042_w1024h768c1cx2625cy1750cxt0cyt0cxb5250cyb3500.jpg");
INSERT INTO recipe VALUES (6, "Chocolate fondant", 2, "", "200g dark chocolate, 150g butter, 150g granulated suger, 50g flour, 3 eggs", 4, 40, 1, "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/ff85d47f-db2b-44ac-847a-7aaa136d1be8/Derivates/ba0708d6-905f-4c11-92d5-6fd11ab61218.jpg");

SELECT * FROM recipe;
