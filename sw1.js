var deleteGreatestValue = function (grid) {
  const m = grid.length,
    n = grid[0].length
  let res = 0

  for (let i = 0; i < m; i++) {
    grid[i].sort((a, b) => a - b)
  }

  for (let j = 0; j < n; j++) {
    let mx = 0

    for (let i = 0; i < m; i++) {
      mx = Math.max(mx, grid[i][j])
    }

    res += mx
  }
  return res
}

/* CREATE TABLE Product
(product_id CHAR(4) NOT NULL,
 product_name VARCHAR(100) NOT NULL,
 product_type VARCHAR(32) NOT NULL,
 sale_price INTEGER ,
 purchase_price INTEGER ,
 regist_date DATE ,
 PRIMARY KEY (product_id));
 
 CREATE TABLE ProductMargin
(product_id CHAR(4) NOT NULL,
 product_name VARCHAR(100) NOT NULL,
 sale_price INTEGER,
 purchase_price INTEGER,
 margin INTEGER,
 PRIMARY KEY(product_id)); */

/* CREATE TABLE ProductIns
(product_id CHAR(4) NOT NULL,
 product_name VARCHAR(100) NOT NULL,
 product_type VARCHAR(32) NOT NULL,
 sale_price INTEGER DEFAULT 0,
 purchase_price INTEGER ,
 regist_date DATE ,
 PRIMARY KEY (product_id)); */
