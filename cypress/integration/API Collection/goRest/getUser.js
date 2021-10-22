/// <reference types ="cypress" />

describe('get user api tes', ()=>{

    let accessToken= 'bfd7cb7e3877b5cf6973e192b9a1d667fdf757688309b5e5881baa90ed25e5e7'

it('get users', ()=>{



    cy.request({


        method: 'GET',
        url: 'https://gorest.co.in/public/v1/users',
        header: {
            'authorization': "Bearer" + accessToken
        }
    }).then((res)=>{
        expect(res.status).to.equal(200)
        expect(res.body.meta.pagination.limit).to.equal(20)



    })
})


})