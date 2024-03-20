import { ISpecification } from './ISpecification'

abstract class CompositeSpecification<T> implements ISpecification<T> {
    abstract isSatisfiedBy(candidate: T): boolean

    and(specification: ISpecification<T>): ISpecification<T> {
        return new AndSpecification<T>(this, specification);
    }
}


export class AndSpecification<T> extends CompositeSpecification<T> {

    private left: ISpecification<T>
    private right: ISpecification<T>

    constructor(left: ISpecification<T>, right: ISpecification<T>) {
        super();
        this.left = left;
        this.right = right;
    }

    isSatisfiedBy(candidate: T): boolean {
        return this.left.isSatisfiedBy(candidate) && this.right.isSatisfiedBy(candidate)
    }
}

export class IsBetween<T> extends CompositeSpecification<T> {
    private min: T
    private max: T

    constructor(min: T, max: T) {
        super()
        this.min = min
        this.max = max
    }

    isSatisfiedBy(candidate: T): boolean {
        return candidate >= this.min && candidate <= this.max;
    }
}