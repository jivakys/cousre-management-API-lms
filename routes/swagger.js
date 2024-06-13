/**
 * @swagger
 * components:
 *   schema:
 *     User:
 *       type: object
 *       required:
 *         - userId
 *         - name
 *         - email
 *         - password
 *         - role
 *       properties:
 *         userId:
 *           type: number
 *           description: unique identifier for each user
 *         name:
 *           type: string
 *           description: username of the user
 *         email:
 *           type: string
 *           description: The student or teacher email
 *         password:
 *           type: string
 *           description: The user or teacher password
 *         role:
 *           type: string
 *           description: student or teacher role
 *         created_at:
 *           type: string
 *           description: timestamp for when the user was created
 *         updated_at:
 *           type: string
 *           description: timestamp for when the user was last updated
 */

/**
 * @swagger
 * components:
 *   schema:
 *     Course:
 *       type: object
 *       required:
 *         - courseId
 *         - title
 *         - description
 *         - created_by
 *       properties:
 *         courseId:
 *           type: number
 *           description: unique identifier for each course
 *         title:
 *           type: string
 *           description: Title for course
 *         description:
 *           type: string
 *           description: course description.
 *         created_by:
 *           type: string
 *           description: the teacher who created the course
 */

/**
 * @swagger
 * components:
 *   schema:
 *       Progress:
 *           type: object
 *           properties:
 *               id:
 *                   type: number
 *                   description: unique identifier for each progress entry
 *               userId:
 *                   type: number
 *                   description: the user who made progress
 *               courseId:
 *                   type: number
 *                   description: the course in which progress was made
 *               progress:
 *                   type: string
 *                   description: status of progress
 */

/**
 * @swagger
 * /api/register:
 *   post:
 *       summary: To add a student's and teacher's information to the database for registration.
 *       tags: [Student & Teacher]
 *       requestBody:
 *           required: true
 *           content:
 *               application/json:
 *                   schema:
 *                       $ref: '#/components/schema/User'
 *       responses:
 *           201:
 *               description: User registered successfully
 *               content:
 *                   application/json:
 *                       schema:
 *                           $ref: '#/components/schema/User'
 *           400:
 *               description: Some server error
 */

/**
 * @swagger
 * /api/login:
 *   post:
 *       summary: Sign in or log in to the application in order to access its features.
 *       tags: [Student & Teacher]
 *       requestBody:
 *           required: true
 *           content:
 *               application/json:
 *                   schema:
 *                       $ref: '#/components/schema/User'
 *       responses:
 *           201:
 *               description: User logged in successfully
 *               content:
 *                   application/json:
 *                       schema:
 *                           $ref: '#/components/schema/User'
 *           400:
 *               description: Some server error
 */

/**
 * @swagger
 * /api/courses/:id:
 *   get:
 *       summary: Retrieve details of a specific course
 *       tags: [Course]
 *       requestBody:
 *           required: true
 *           content:
 *               application/json:
 *                   schema:
 *                       $ref: '#/components/schema/Course'
 *       responses:
 *           200:
 *               description: Course Details Found
 *               content:
 *                   application/json:
 *                       schema:
 *                           $ref: '#/components/schema/Course'
 *           404:
 *               description: Some server error
 */

/**
 * @swagger
 * /api/courses:
 *   get:
 *       summary: Retrieve details of a All course with search by title, filter by craetedBy and pagination.
 *       tags: [Course]
 *       requestBody:
 *           required: true
 *           content:
 *               application/json:
 *                   schema:
 *                       $ref: '#/components/schema/Course'
 *       responses:
 *           200:
 *               description: Details
 *               content:
 *                   application/json:
 *                       schema:
 *                           $ref: '#/components/schema/Course'
 *           404:
 *               description: Some server error
 */

/**
 * @swagger
 * /api/courses:
 *   post:
 *       summary: To have a teacher create a new course.
 *       tags: [Course]
 *       requestBody:
 *           required: true
 *           content:
 *               application/json:
 *                   schema:
 *                       $ref: '#/components/schema/Course'
 *       responses:
 *           201:
 *               description: New Course Created.
 *               content:
 *                   application/json:
 *                       schema:
 *                           $ref: '#/components/schema/Course'
 *           400:
 *               description: Some server error
 */

/**
 * @swagger
 * /api/courses/:id:
 *   put:
 *     summary: To update a specific course from the database.
 *     tags: [Course]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schema/Course'
 *     responses:
 *       201:
 *         description: Course Updated Successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schema/Course'
 *       400:
 *         description: Some server error
 */

/**
 * @swagger
 * /api/delete/:id:
 *   delete:
 *     summary: To delete a specific course by teacher from the database.
 *     tags: [Course]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schema/Course'
 *     responses:
 *       204:
 *         description: Course Deleted Successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schema/Course'
 *       400:
 *         description: Some server error
 */

/**
 * @swagger
 * /api/users/:id/progress:
 *   get:
 *       summary: To Retrieve progress for a specific user
 *       tags: [Progress]
 *       responses:
 *           200:
 *               description: Progress Recieved.
 *               content:
 *                   application/json:
 *                       schema:
 *                           $ref: '#/components/schema/Progress'
 *           400:
 *               description: Something went wrong to fetch trainers Data
 */

/**
 * @swagger
 * /api/users/:id/progress:
 *   post:
 *       summary: To Update progress for a specific user
 *       tags: [Progress]
 *       requestBody:
 *           required: true
 *           content:
 *               application/json:
 *                   schema:
 *                       $ref: '#/components/schema/Progress'
 *       responses:
 *           200:
 *               description: User Progress updated.
 *               content:
 *                   application/json:
 *                       schema:
 *                           $ref: '#/components/schema/Progress'
 *           400:
 *               description: Some server error
 */
