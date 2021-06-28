export const barbermanResponse = {
  data: {
    name: 'Barber man one',
    status: 1,
    price: 35000,
    price_discount: 30000,
    location_id: 1,
    service: 1,
    email: "jackson@gmail.com",
    photo: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEA"
  }
}

export const RequestCreateBarbermans = {
  url: '/api/v1/barbermans',
  method: 'POST',
  query: '',
  headers: null,
  transaction: null,
  route: {
    path: '/api/v1/barbermans',
  }
};

export const barbermanBody = {
  name: "Jackson Doe",
  status: 1,
  price: 50000,
  price_discount: 45000,
  location_id: 1,
  service: 1,
  email: "jackson@mail.com",
  photo: "base64/imgae/as9123j91lxmaso"
}

export const barbermanUpdateBody = {
  id: "1",
  name: "Jackson Doe",
  status: 1,
  price: 50000,
  price_discount: 45000,
  location_id: 1,
  service: 1,
  email: "jackson@mail.com",
  photo: "base64/imgae/as9123j91lxmaso"
}

export const barbermanFindResponse = {
  rows: [barbermanResponse.data],
}

export const RequestBarbermanFindQuery = {
  skip: '0',
  limit: '10',
  sort: 'asc',
  sortBy: 'id',
};

export const barbermanUpdateResponse = {
  name: 'Barber man one',
  status: 1,
  price: 35000,
  price_discount: 30000,
  location_id: 1,
  service: 1,
  email: "jackson@gmail.com",
  photo: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEA"
};