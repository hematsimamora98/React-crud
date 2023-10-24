//jika tidak kepanggil data base

---pada backend nya juga ditambahkan
---pada APP.JS/SERVER
app.use(function(req, res, next) {
res.header("Access-Control-Allow-Origin", "\*"); // update to match the domain you will make the request from
res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
res.header("Access-Control-Allow-Methods", "POST, PUT, GET, DELETE");
next();
});

---

useEffect(() => {
getItems()
}, []);
// jika kita pake useeffect dengan dependency, maka akan di trigger ulang setiap perubahan value

---

//{items.map((item,i)=>{ ------------ditambahkan index
// const{id,name,category,price,stock}=item;
// return(
// <tr key={id}>
// <td>{i+1}</td>
// <td>{name}</td>
// <td>{category}</td>
// <td>Rp. {price}</td>
// <td>{stock} pcs</td>
// </tr>
// );
//

// Jangan lupa tambahkan KEY
