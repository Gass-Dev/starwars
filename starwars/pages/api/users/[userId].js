import { users } from '../../../data';

export default async (req, res) => {
    const httpMethod = req.method;
    const { username } = req.body;
    const userId = req.query.userId;
    const result = users.filter((user) => user.id === parseInt(userId));

    switch (httpMethod) {
        case 'GET':
            if(result.length > 0) {
                res.status(200).json(result[0]);
            } else {
                res.status(404).json({ message:`User with id: ${userId} not found`})
            }
            break;
        case 'PUT':
            // Update the user ( TODO)
            res.status(200).json({
                username: username,
            })
            break;
        case 'DELETE':
            //Delete the user ( TODO)
            res.status(200).json(result[0])
            break;
        default:
            res.setHeader('Allow', [ 'GET', 'PUT', 'DELETE' ]);
            res.status(405).end(`Method ${httpMethod} not allowed`);
    } 
}