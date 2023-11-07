interface Course {
  name: string; // COLOCA COMO OBRIGATÓRIO
  duration?: number; // COLOCA COMO NÃO OBRIGATÓRIO
  educator: string; // COLOCA COMO OBRIGATÓRIO
}

class CreateCourseService {
  execute({ duration = 8, name, educator }: Course) {
    console.log(name, duration, educator);
  }
}

export default new CreateCourseService();
