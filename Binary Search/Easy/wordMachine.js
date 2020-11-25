// Word machine

// You are given a list of strings ops where each element is either:

// A non-negative integer that should be pushed into a stack
// "POP" meaning pop the top element in the stack
// "DUP" meaning duplicate the top element in the stack
// "+" meaning pop the top two and push the sum
// "-" meaning pop the top two and push top - second
// Return the top element in the stack after applying all operations. If there are any invalid operations, return -1.
class Solution {
    solve(ops) {
        let stack = []
        for (let op of ops) {

            switch (op) {
                case 'POP':
                    if (stack.length >= 1) {
                        stack.pop()
                        break
                    } else {
                        return -1
                    }

                    case 'DUP':
                        if (stack.length >= 1) {
                            let duplicate = stack.pop()
                            stack.push(duplicate)
                            stack.push(duplicate)
                            break
                        } else {
                            return -1
                        }

                        case '+':
                            if (stack.length >= 2) {
                                let add = stack.pop() + stack.pop()
                                stack.push(add)
                                break
                            } else {
                                return -1
                            }

                            case '-':
                                if (stack.length >= 2) {
                                    let minus = stack.pop() - stack.pop()
                                    stack.push(minus)
                                    break
                                } else {
                                    return -1
                                }

                                default:
                          
                                    stack.push(parseInt(op))
                                    break
            }


        }
        return Number.isFinite(stack[0]) ? stack.pop() : -1
    }
}