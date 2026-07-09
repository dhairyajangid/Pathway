// typeof

let ten = 28;
let ven = "cha";
let gen = 'g';
let obg = {
    car_Id: 1092,
    car_name: "honda",
    car_spec: 153.58,
    color: {
        white: true,
        green: false,
        black: true,
    }
}

const typeofDtype = (e) => {
    console.log(typeof(e));
}

typeofDtype(ten);
typeofDtype(ven);
typeofDtype(gen);
typeofDtype(obg);
