export default props => {
    const elseChild = props.children.filter(child => {
        return child.type && child.type.name === 'Else';
    })[0]

    const ifchildren = props.children.filter(child => {
        return child !== elseChild
    })

    console.log(elseChild);
    if (props.test) {
        return ifchildren;
    } else if(elseChild){
        return elseChild;
    }else {
        return false;
    }
}

export const Else = props => props.children