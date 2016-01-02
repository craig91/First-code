class Animal
    
    def hi(person)
        puts "well hello there #{person}"
    end
    
    def poop
        puts "Drops a solid turd"
    end
end

class Bird < Animal
    def poop
        puts "Drops a liquid turd eww"
    end
end

rover = Animal.new 
rover.hi(channler)