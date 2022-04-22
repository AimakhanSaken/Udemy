function A() {
    let a = 1

    function B () {
        let b = 2

        function C() {
            let c = 3

            console.log('C:', a, b, c); 
        }

        C()
        console.log('B:', a, b );
    }

    B()
    console.log('A:', a);   
}

A()

